## Receipt Track

## Contributors
Tanay Komarlu, Andrew Kung, Pranav Acharya

## Abstract
This project focuses on multi-class classification to generate a monthly expense report for users to aid in keeping track of their monthly finances. We made use of Linear Support Vector Classification with Sci Kit learn and e-commerce data collected from datasets on Kaggle. We present the results of this classification through the use of a serverless mobile application developed using React Native. The users upload images of receipts which are processed with Textract, Amazon's OCR engine. The extracted data is then classified by our classifier, hosted on SageMaker. The results were promising with about 98 % cross validation score for classifying receipt items based on category with the help of the LinearSVC classifier.

## Motivation
The main purpose of this work was to evaluate how a machine learning approach could be used to simplify and automatize personal expense management. Managing your personal expenses can be a daunting task. We wanted to develop an mobile application for a chain of services from user to database that handled the extraction and classification receipt data. 
