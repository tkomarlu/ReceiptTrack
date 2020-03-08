# Receipt Track

## Contributors
Tanay Komarlu, Andrew Kung, Pranav Acharya

## Abstract
This project focuses on multi-class classification to generate a personalized monthly expense report for users to aid in keeping track of their monthly finances. We made use of Linear Support Vector Classification with SciKit Learn and e-commerce data collected from datasets on Kaggle. We present the results of this classification through the use of a serverless mobile application developed using React Native. The users upload images of receipts which are processed with Textract, Amazon's OCR engine, and then classified by our classifier, hosted on SageMaker. The results were promising with about 98% cross validation score for classifying receipt items based on category with the help of the LinearSVC classifier.

## Motivation
Managing your personal expenses can be a daunting task for college students. Students need to smartly manage their day-to-day expenses. Our goal is to enable students to take charge of their personal finance and make more informed decisions relating to their spending habits. Upon making a transaction with cash, credit or debit, students will receive a receipt. For years, the classic approach has been a shoebox stuffed full of receipts. Our goal was to provide a mobile application that could fill the role of the shoebox by allowing students to upload images of receipts and receive a personalized expense report.

## Methodology

### High Level Architecture
![](ReadMeImages/HighLevelArchitecture.png)

Walking through the steps:

1. User takes a photo of the receipt and using the React Native app, chooses to upload the image for processing (AWS S3 Bucket)
2. Once the image is uploaded the React Native app triggers a Lambda function that updates the database with a reference to the image in S3. 
3. This also triggers another Lambda function which passes the image to Textract. Textract allows us to extract the text from the receipts. Textract hands off the actual processing of the text to another lambda function which cleans the extracted text into a formatted JSON which can be processed by our model. 
4. This JSON is handed to our model and classified. Once the processing has completed, success or fail, the results are handed off to the Processing Callback function to update the database. 
5. The React Native app is then updated with the use of a Restful API built with API Gateway. This AWS service allows us to create, deploy, and manage a REST application programming interface (API) to expose our AWS Lambda functions. 

#### User Experience
![](ReadMeImages/Wireframe.png)

Many of our users will upload their receipts shortly after receiving them. As a result, the user experience needs to be simple and streamlined. Users are able to view a chart of their monthly expenses on the first screen, which allows them to identify the categories with high cash outflow. The next page displays the expenses in a spreadsheet and organizes the data by category. The third page enables users to upload images to be processed. Users are also able to view sum totals of each category. With the settings page, users are able to set a monthly budget. The third screen also includes a progress bar which tells the users how close they are to crossing their budget.

#### User Security
As we will be dealing with personally identifiable information, there is the need to be able to securely authenticate our users. The application makes use of single sign-on with Facebook to ensure that a user's data is kept private. 

#### Database Design
![](ReadMeImages/rdsDatabaseDesign.png)

Our data model has entities that store user, receipt and item data. The user data is updated when a new user signs onto the application for the first time. While the user's receipt and item data is updated when the receipt processing function is finished. Our database is normalized in order to reduce our data redundancy and improve data integrity. We make use of a MySQL database hosted on AWS's Relation Database Service.

### Data Cleaning

We planned to have our machine learning model classify our products into four categories: Clothing, Entertainment, Food and Drink, Home and Office. Thus, we had to find enough Kaggle datasets such that we had enough training data for each of these categories.

<br/>

Below is an example of the original Kaggle dataset that we downloaded 

| gender | masterCategory | subCategory      | articleType      | baseColour | season | year | usage  | productDisplayName                                    |
|--------|----------------|------------------|------------------|------------|--------|------|--------|-------------------------------------------------------|
| Men    | Apparel        | Topwear          | Shirts           | Navy Blue  | Fall   | 2011 | Casual | Turtle Check Men Navy Blue Shirt                      |
| Men    | Apparel        | Bottomwear       | Jeans            | Blue       | Summer | 2012 | Casual | Peter England Men Party Blue Jeans                    |
| Women  | Accessories    | Watches          | Watches          | Silver     | Winter | 2016 | Casual | Titan Women Silver Watch                              |
| Men    | Apparel        | Bottomwear       | Track Pants      | Black      | Fall   | 2011 | Casual | Manchester United Men Solid Black Track Pants         |
| Men    | Apparel        | Topwear          | Tshirts          | Grey       | Summer | 2012 | Casual | Puma Men Grey T-shirt                                 |
| Men    | Apparel        | Topwear          | Tshirts          | Grey       | Summer | 2011 | Casual | Inkfruit Mens Chain Reaction T-shirt                  |
| Men    | Apparel        | Topwear          | Shirts           | Green      | Summer | 2012 | Ethnic | Fabindia Men Striped Green Shirt                      |
| Women  | Apparel        | Topwear          | Shirts           | Purple     | Summer | 2012 | Casual | Jealous 21 Women Purple Shirt                         |

<br/>

On this original csv file from which we collected our clothing data, we separated and used only the Product Display Name column as our clothing category data on which the machine learning model was trained on. The csv files for our other three categories similarly contained extra columns that were not necessary to train our model, so we removed those columns. 

<br/>

There were also some mislabeled products such as lemon-flavored soap that were under incorrectly under "Food and Drink" instead of "Home and Office". We had to manually go through the datasets to remove irregularities like these that would have caused  our classifier to incorrectly assign labels to such products. 

### Pre-processing

Using sklearn’s TFIDFVectorizer (Term Frequency Inverse Document Frequency) on the training data, we converted the product names into multi-dimensional numerical vectors based on keyword and term frequency calculations. This step was necessary because our Sci-Kit Learn LinearSVC Model can only train on numerical data.


### Defining Success

#### Confusion Plot 

![](ReadMeImages/ConfusionPlot.png)

Our confusion plot verified that our LinearSVC model had a very high accuracy when generating predictions on our test data.

#### F1 Score


| Category | Precision | Recall | F1-score | Support |
|--------|--------|--------|--------|--------|
| Clothing | 1.00 | 0.99 | 1.00 | 8524 |
| Entertainment | 0.98 | 0.98 | 0.98 | 13172 |
| Food and Drink | 0.98 | 0.97 | 0.98 | 7886 |
| Home and Office | 0.97 | 0.98 | 0.98 | 10226 |


F1 score is the harmonic mean between precision and recall for each category. To calculate the precision, recall, and F1 values for each of the four categories, we used the one-vs-all strategy where we trained a single classifier for each class with samples of that class as positive and all other samples as negative. 


## Summary

Our mean F1 score of .98 is extremely satisfactory because that means that almost all of the products were correctly classified into their respective categories by the machine learning model. 

<br/> 

One difficulty that we had was obtaining adequate datasets for each of our categories. These categories are also so broad that we should constantly expand our training dataset and consistently retrain our model to prevent drifting over time. Given additional time, we would broaden our dataset by scraping product names from well-known E-commerce sites like Amazon and Walmart. 

<br/> 

Given time, we would also streamline the UX and UI of the front end. We may make use of user testing to better understand what users would like to see in this application.
