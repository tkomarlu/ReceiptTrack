# Receipt Track

## Contributors
Tanay Komarlu, Andrew Kung, Pranav Acharya

## Abstract
This project focuses on multi-class classification to generate a monthly expense report for users to aid in keeping track of their monthly finances. We made use of Linear Support Vector Classification with Sci Kit learn and e-commerce data collected from datasets on Kaggle. We present the results of this classification through the use of a serverless mobile application developed using React Native. The users upload images of receipts which are processed with Textract, Amazon's OCR engine. The extracted data is then classified by our classifier, hosted on SageMaker. The results were promising with about 98 % cross validation score for classifying receipt items based on category with the help of the LinearSVC classifier.

## Motivation
The main purpose of this work was to evaluate how a machine learning approach could be used to simplify and automatize personal expense management. Managing your personal expenses can be a daunting task. We wanted to develop an mobile application for a chain of services from user to database that handled the extraction and classification receipt data. 

## Methodology

### Data Cleaning
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

<br> <\br>

On this original csv file from which we got our clothing data, we separated and used only the Product Display Name column as our clothing category data on which the machine learning model was trained on. The csv files for our other three cateogries simiarly contained extra columns that were not necesssary to train our model, so we removed those columns. 
