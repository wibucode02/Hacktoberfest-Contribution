# SQL-Tutorials

This tutorial works for all the platforms, except for the installation part in which you need to take care of the _package manager_ you use (eg: apt for Debian, Ubuntu and Mint ... and so on).  
I will be using **Linux Mint** for the following tutorial:

## Installation

**Step 1:** 
Open Terminal and type
```Shell
sudo apt install mysql-server
```

**Step 2:**
To check that you have successfully installed mysql-server
```Shell
systemctl status mysql
```

**Step 3:**
Securely establish connection using
```Shell
sudo mysql_secure_installation
```

## Run MySQL

```Shell
sudo mysql
```

Use '\q' or '\exit' to quit MySql.

## Creating Databases and Tables

#### Show Databases
```sql
SHOW DATABASES;
```

#### To create a database
```sql
CREATE DATABASE database_name;
```

#### To drop a database
```sql
DROP DATABASE database_name;
```

#### To use a database
```sql
USE database_name;
```

#### To check which database is being used
```sql
SELECT database();
```

#### To create a table
Conventionally, _table_name_ must be pluralised
```sql
CREATE TABLE table_name
  (
    column_name data_type,
    column_name data_type
  );
```
data_type: VARCHAR(size), INT ...and many more.

#### To check if table is created
```sql
SHOW TABLES;
```
or
```sql
SHOW COLUMNS FROM table_name;
```
or
```sql
DESC table_name;
```

#### To drop a table
```sql
DROP table_name;
```

## Inserting Data

#### Inserting data into your tables
```sql
INSERT INTO table_name(column_name) VALUES (data);
```

#### To view all of the data from a table
```sql
SELECT * FROM table_name;
```

#### Inserting multiple data entries
```sql
INSERT INTO table_name 
            (column_name, column_name) 
VALUES      (value, value), 
            (value, value), 
            (value, value);
```

How to insert a string (VARCHAR) value that contains quotations ?  
You can do it a couple of ways:  
- Escape the quotes with a backslash: "This text has \\"quotes\\" in it" or 'This text has \\'quotes\\' in it'
- Alternate single and double quotes: "This text has 'quotes' in it" or 'This text has "quotes" in it'  

#### To view warnings
```sql
SHOW WARNINGS;
```

If you happen to encounter an error instead of a warning then, the solution is to run the following command in your mysql shell:
```sql
set sql_mode='';
```

#### To restrict user from entering empty data (NULL)
```sql
CREATE TABLE table_name
  (
    column_name data_type NOT NULL,
    column_name data_type NOT NULL
  );
```

#### To set default values
```sql
CREATE TABLE table_name
  (
    column_name data_type DEFAULT default_value,
    column_name data_type DEFAULT default_value
  );
```

#### To set default values and to restrict user from entering empty data (NULL)
```sql
CREATE TABLE table_name
  (
    column_name data_type NOT NULL DEFAULT default_value,
    column_name data_type NOT NULL DEFAULT default_value
  );
```

#### To segregate duplicate entries (_use PRIMARY KEY_)
```sql
CREATE TABLE table_name
  (
    id INT NOT NULL AUTO_INCREMENT,
    column_name data_type,
    column_name data_type,
    PRIMARY KEY (id)
  );
```
or
```sql
CREATE TABLE table_name
  (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    column_name data_type,
    column_name data_type
  );
```

## CRUD Commands

***C*****reate**  
***R*****ead**  
***U*****pdate**  
***D*****elete**  
  
### Create

#### Preparing Our Data

We will be using following _cats table_ throughout this CRUD commands section

```sql
CREATE TABLE cats 
  ( 
     cat_id INT NOT NULL AUTO_INCREMENT, 
     name   VARCHAR(100), 
     breed  VARCHAR(100), 
     age    INT, 
     PRIMARY KEY (cat_id) 
  ); 
```

Insert some new cats:

```sql
INSERT INTO cats(name, breed, age) 
VALUES ('Ringo', 'Tabby', 4),
       ('Cindy', 'Maine Coon', 10),
       ('Dumbledore', 'Maine Coon', 11),
       ('Egg', 'Persian', 4),
       ('Misty', 'Tabby', 13),
       ('George Michael', 'Ragdoll', 9),
       ('Jackson', 'Sphynx', 7);
```

### Read

#### Select all columns
```sql
SELECT * FROM table_name;
```

#### Select a specific column
```sql
SELECT column_name FROM table_name;
```

#### Select multiple columns
```sql
SELECT column_name1, column_name2 FROM table_name;
```

#### The WHERE clause
```sql
SELECT * FROM table_name WHERE condition;
```
The '=' operator after WHERE acts as a conditional operator for equality.  
  
The following _conditions_ are same:  
name='Egg'  
name='EGG'  
name='eGg'  
We observe that SQL is _case-insensitive_.  

#### Aliases (Easier to read results)
```sql
SELECT column_name AS easier_to_read_name FROM table_name;
```

### Update

#### UPDATE and SET
```sql
UPDATE table_name SET column_name=some_value WHERE condition;
```

The '=' operator after SET acts as an assignment operator.  
  
Try SELECTing before you UPDATE.  

### Delete

#### DELETE
```sql
DELETE FROM table_name WHERE condition;
```

#### Difference between DELETE and DROP
This deletes all the entries in the table, but the shell remains intact  
i.e. you can still use the table
```sql
DELETE FROM table_name;
```
This deletes all the entries in the table and also deletes the shell  
i.e. the table does not exist after using DROP
```sql
DROP table_name;
```

## The World Of String Functions

#### Running SQL files
```sql
SOURCE file_name.sql
```

#### Combine data for cleaner input
```sql
SELECT column_name1 AS easy_to_read_column_name1, 
       column_name2 AS easy_to_read_column_name2, 
       CONCAT(column_name1, seperator, column_name2) AS concatenated_column_name
FROM table_name;
```

_seperator_: ' ', ' - ', ' , ' ...and many more.  

#### Concat many columns with seperator
```sql
SELECT column_name1 AS easy_to_read_column_name1, 
       column_name2 AS easy_to_read_column_name2, 
       CONCAT_WS(seperator, column_name1, column_name2) AS concatenated_column_name
FROM table_name;
```

#### Working with parts of strings
```sql
SELECT SUBSTRING(string, start_index, end_index);
```

1 based indexing  
if end_index is not mentioned then it goes upto the last character of the string  
  
SUBSTR() also works  

#### Replace parts of strings
```sql
SELECT REPLACE(string, substring_we_want_to_remove, substring_we_want_to_replace_with);
```

_substring_we_want_to_remove_ is case sensitive  
  
Use cmd + /  (mac)  
or  
ctrl + /  (pc)  
to comment out SQL  
  
The REPLACE() function, as well as the other string functions, only change the query output, they don't affect the actual data in the database.  


#### Reverse 
```sql
SELECT REVERSE(string);
```

#### Count characters in a string
```sql
SELECT CHAR_LENGTH(string);
```

[SQL Formatter](https://sql-format.com/)  

#### Change a string's case
```sql
SELECT UPPER(string);
SELECT LOWER(string);
```

### Refining Our Selections

#### Distinct
```sql
SELECT DISTINCT column_name FROM table_name;
```

#### Distinct for multiple columns 
```sql
SELECT DISTINCT column_name1, column_name2 FROM table_name;
```

#### Sorting our results (ascending by default)
```sql
SELECT column_name FROM table_name ORDER BY sorted_column_name;
```

#### Sorting our results (descending)
```sql
SELECT column_name FROM table_name ORDER BY sorted_column_name DESC;
```

#### Shortening sorted_column_name
```sql
SELECT column_name1, column_name2, column_name3 FROM table_name ORDER BY 1;
```

Here _1_ can be used instead of writing column_name1, _2_ for column_name2, _3_ for column_name3 ...and so on.  

#### Sort multiple columns
```sql
SELECT column_name1, column_name2, column_name3 FROM table_name ORDER BY column_name1, column_name2;
```

#### Limit
```sql
SELECT column_name FROM table_name LIMIT num;
```

#### Using Limit with Order By
```sql
SELECT column_name FROM table_name ORDER BY sorted_column_name DESC LIMIT start_num, end_num;
```

Here, _start_num_ is optional to use, its default value being 0 (0 based indexing)  
[ start_num, end_num )

#### Selecting rows from a starting point to the end of the table 
```sql
SELECT * FROM table_name LIMIT starting_number, some_gigantic_number;
```
some_gigantic_number: 18446744073709551615 ...and many more.  

#### Better searching
```sql
WHERE column_name LIKE regex;
```

'%': Wildcard (pattern matching for any number of characters)  
regex: '%da%', '%harry%' ...and many more.  

#### More Wildcards
```sql
WHERE column_name LIKE '____'
```

'\_': Wildcard (pattern matching for eaxactly one character)  
'\\_': Underscore  
'\\%': Percentage  

## Aggregate Functions

#### Count 
```sql
SELECT COUNT(*) FROM table_name;
```
or
```sql
SELECT COUNT(column_name) FROM table_name;
```
or
```sql
SELECT COUNT(DISTINCT column_name) FROM table_name;
```

#### Group By
```sql
SELECT column_name, COUNT(*) FROM table_name
GROUP BY column_name;
```

GROUP BY summarizes or aggregates identical data into single rows.  
It is to be generally used with other aggregate funtions such as: COUNT.  

#### Min and Max
```sql
SELECT MIN(column_name) FROM table_name;
SELECT MAX(column_name) FROM table_name;
```

#### Subqueries
```sql
SELECT * FROM table_name
WHERE column_name = (SELECT MIN(column_name) FROM table_name);
```
or 
```sql
SELECT * FROM table_name 
ORDER BY column_name ASC LIMIT 1;
```

#### Using Min/Max with Group By
```sql
SELECT column_name, MAX(quantity_column_name)
FROM table_name
GROUP BY column_name;
```

#### Sum
```sql
SELECT SUM(column_name) FROM table_name;
```

#### Using Sum with Group By
```sql
SELECT column_name, SUM(quantity_column_name)
FROM table_name
GROUP BY column_name;
```

#### Average
```sql
SELECT AVG(column_name) FROM table_name;
```

AVG returns a floating point number upto 4 decimal places  

#### Using Average with Group By
```sql
SELECT column_name, AVG(quantity_column_name) 
FROM books 
GROUP BY column_name;
```

## Data Types

#### Text (CHAR and VARCHAR)
  
CHAR has a fixed length.  
  
The length of a CHAR column is fixed to the length that you declare when you create the table.  
  
The length can be any value from 0 to 255.  
  
When CHAR values are stored, they are right-padded with spaces to the specified length.  
  
When CHAR values are retrieved, trailing spaces are removed unless the PAD_CHAR_TO_FULL_LENGTH SQL mode is enabled.  
  
CHAR is faster for fixed length text.  
  
Oherwise ... Use VARCHAR  
  
#### Numbers (INT, DECIMAL...)
```sql
DECIMAL(Total_Number_Of_Digits, Digits_After_Decimal)
```

#### There's also (FLOAT, DOUBLE)
  
Store larger numbers using less space BUT it comes at the cost of precision.  
  
FLOAT  
4 Bytes of Memory Needed and ~7 digits Precision Issues  
  
DOUBLE  
8 Bytes of Memory Needed and ~15 digits Precision Issues  
  
#### Dates & Times
  
DATE: 'YYYY-MM-DD' Format  
  
TIME: 'HH:MM:SS' Format  
  
DATETIME: 'YYYY-MM-DD HH:MM:SS' Format  
  
Some popular functions:  
CURDATE() - gives current date  
CURTIME() - gives current time  
NOW() - gives current datetime  

DAY()  
DAYNAME()  
DAYOFWEEK()  
DAYOFYEAR()  

DATE_FORMAT(_datetime_, _format_)  
_fornat_: Week(%W), Month(%M), Year(%Y) ... and so on  

#### Date Math
Examples:
```sql
SELECT * FROM people;
 
SELECT DATEDIFF(NOW(), birthdate) FROM people;
 
SELECT name, birthdate, DATEDIFF(NOW(), birthdate) FROM people;
 
SELECT birthdt FROM people;
 
SELECT birthdt, DATE_ADD(birthdt, INTERVAL 1 MONTH) FROM people;
 
SELECT birthdt, DATE_ADD(birthdt, INTERVAL 10 SECOND) FROM people;
 
SELECT birthdt, DATE_ADD(birthdt, INTERVAL 3 QUARTER) FROM people;
 
SELECT birthdt, birthdt + INTERVAL 1 MONTH FROM people;
 
SELECT birthdt, birthdt - INTERVAL 5 MONTH FROM people;
 
SELECT birthdt, birthdt + INTERVAL 15 MONTH + INTERVAL 10 HOUR FROM people;
```

#### Timestamps
Examples:
```sql
CREATE TABLE comments (
    content VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);
 
INSERT INTO comments (content) VALUES('lol what a funny article');
 
INSERT INTO comments (content) VALUES('I found this offensive');
 
INSERT INTO comments (content) VALUES('Ifasfsadfsadfsad');
 
SELECT * FROM comments ORDER BY created_at DESC;
 
CREATE TABLE comments2 (
    content VARCHAR(100),
    changed_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
);
 
INSERT INTO comments2 (content) VALUES('dasdasdasd');
 
INSERT INTO comments2 (content) VALUES('lololololo');
 
INSERT INTO comments2 (content) VALUES('I LIKE CATS AND DOGS');
 
UPDATE comments2 SET content='THIS IS NOT GIBBERISH' WHERE content='dasdasdasd';
 
SELECT * FROM comments2;
 
SELECT * FROM comments2 ORDER BY changed_at;
 
CREATE TABLE comments2 (
    content VARCHAR(100),
    changed_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW()
);
```

## The Power of Logical Operators 

#### Not Equal
Example:
```sql
SELECT title FROM books WHERE released_year != 2017;
```

#### Not Like
Example:
```sql
SELECT title FROM books WHERE title NOT LIKE 'W%';
```

#### Greater Than
Example:
```sql
SELECT title, released_year FROM books 
WHERE released_year > 2000 ORDER BY released_year;
```

#### Greater Than or Equal To
Example:
```sql
SELECT title, released_year FROM books 
WHERE released_year >= 2000 ORDER BY released_year;
```

#### Less Than
Example:
```sql
SELECT title, released_year FROM books
WHERE released_year < 2000;
```

#### Less Than or Equal To
Example:
```sql
SELECT title, released_year FROM books
WHERE released_year <= 2000;
```

#### Logical AND
Example:
```sql
SELECT  
    title, 
    author_lname, 
    released_year FROM books
WHERE author_lname='Eggers' 
    AND released_year > 2010;
```

#### Logical OR
Example:
```sql
SELECT 
    title, 
    author_lname, 
    released_year 
FROM books
WHERE author_lname='Eggers' OR released_year > 2010;
```

#### Between, Not Between
Examples:
```sql
SELECT title, released_year FROM books 
WHERE released_year BETWEEN 2004 AND 2015;
```

```sql
SELECT title, released_year FROM books 
WHERE released_year NOT BETWEEN 2004 AND 2015;
```

```sql
SELECT 
    name, 
    birthdt 
FROM people
WHERE 
    birthdt BETWEEN CAST('1980-01-01' AS DATETIME)
    AND CAST('2000-01-01' AS DATETIME);
```

#### In, Not In
Examples:
```sql
SELECT title, author_lname FROM books
WHERE author_lname IN ('Carver', 'Lahiri', 'Smith');
```

#### 
```sql
SELECT title, released_year FROM books
WHERE released_year NOT IN 
(2000,2002,2004,2006,2008,2010,2012,2014,2016);
```

#### 
```sql
SELECT title, released_year FROM books
WHERE released_year >= 2000 AND
released_year % 2 != 0 ORDER BY released_year;
```

#### Case Statements
Example:
```sql
SELECT title, released_year,
       CASE 
         WHEN released_year >= 2000 THEN 'Modern Lit'
         ELSE '20th Century Lit'
       END AS GENRE
FROM books;
```

## One To Many

### Foreign Key (references to another table within a table)

#### Creating the customers and orders tables
```sql
CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);
CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);
```

#### Inserting some customers and orders
```sql
INSERT INTO customers (first_name, last_name, email) 
VALUES ('Boy', 'George', 'george@gmail.com'),
       ('George', 'Michael', 'gm@gmail.com'),
       ('David', 'Bowie', 'david@gmail.com'),
       ('Blue', 'Steele', 'blue@gmail.com'),
       ('Bette', 'Davis', 'bette@aol.com');
       
INSERT INTO orders (order_date, amount, customer_id)
VALUES ('2016/02/10', 99.99, 1),
       ('2017/11/11', 35.50, 1),
       ('2014/12/12', 800.67, 2),
       ('2015/01/03', 12.50, 2),
       ('1999/04/11', 450.25, 5);
```

#### This INSERT fails because of our fk constraint.  No user with id: 98
```sql
INSERT INTO orders (order_date, amount, customer_id)
VALUES ('2016/06/06', 33.67, 98);
```

### Cross Joins

#### Finding Orders Placed By George: 2 Step Process
```sql
SELECT id FROM customers WHERE last_name='George';
SELECT * FROM orders WHERE customer_id = 1;
```

#### Finding Orders Placed By George: Using a subquery
```sql
SELECT * FROM orders WHERE customer_id =
    (
        SELECT id FROM customers
        WHERE last_name='George'
    );
```

#### Cross Join Craziness
```sql
SELECT * FROM customers, orders;
```

### INNER JOIN

#### Implicit Inner Join
```sql
SELECT * FROM customers, orders 
WHERE customers.id = orders.customer_id;
```
or
```sql
SELECT first_name, last_name, order_date, amount
FROM customers, orders 
    WHERE customers.id = orders.customer_id;
```

#### Explicit Inner Join
```sql
SELECT * FROM customers
JOIN orders
    ON customers.id = orders.customer_id;
    
SELECT first_name, last_name, order_date, amount 
FROM customers
JOIN orders
    ON customers.id = orders.customer_id;
    
SELECT *
FROM orders
JOIN customers
    ON customers.id = orders.customer_id;
```
### LEFT JOIN 
```sql
SELECT * FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id;
SELECT first_name, last_name, order_date, amount
FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id;
```
**IFNULL()**
```sql
SELECT 
    first_name, 
    last_name,
    IFNULL(SUM(amount), 0) AS total_spent
FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY customers.id
ORDER BY total_spent;
```

### RIGHT JOIN
```sql
SELECT * FROM customers
RIGHT JOIN orders
    ON customers.id = orders.customer_id;
```

#### Working With ON DELETE CASCADE
```sql
CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100)
);
 
CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    FOREIGN KEY(customer_id) 
        REFERENCES customers(id)
        ON DELETE CASCADE
);
```

## Many to Many

_Examples:_  
  
Books - Authors  
Blog Posts - Tags  
Students - Classes  
  
Imagine we're building a **TV Show Reviewing** application  
  
#### Creating the reviewers table
```sql
CREATE TABLE reviewers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);
```

#### Creating the series table
```sql
CREATE TABLE series(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    released_year YEAR(4),
    genre VARCHAR(100)
);
```

#### Creating the reviews table
```sql
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rating DECIMAL(2,1),
    series_id INT,
    reviewer_id INT,
    FOREIGN KEY(series_id) REFERENCES series(id),
    FOREIGN KEY(reviewer_id) REFERENCES reviewers(id)
);
```

#### Inserting a bunch of data
```sql
INSERT INTO series (title, released_year, genre) VALUES
    ('Archer', 2009, 'Animation'),
    ('Arrested Development', 2003, 'Comedy'),
    ("Bob's Burgers", 2011, 'Animation'),
    ('Bojack Horseman', 2014, 'Animation'),
    ("Breaking Bad", 2008, 'Drama'),
    ('Curb Your Enthusiasm', 2000, 'Comedy'),
    ("Fargo", 2014, 'Drama'),
    ('Freaks and Geeks', 1999, 'Comedy'),
    ('General Hospital', 1963, 'Drama'),
    ('Halt and Catch Fire', 2014, 'Drama'),
    ('Malcolm In The Middle', 2000, 'Comedy'),
    ('Pushing Daisies', 2007, 'Comedy'),
    ('Seinfeld', 1989, 'Comedy'),
    ('Stranger Things', 2016, 'Drama');
 
 
INSERT INTO reviewers (first_name, last_name) VALUES
    ('Thomas', 'Stoneman'),
    ('Wyatt', 'Skaggs'),
    ('Kimbra', 'Masters'),
    ('Domingo', 'Cortes'),
    ('Colt', 'Steele'),
    ('Pinkie', 'Petit'),
    ('Marlon', 'Crafford');
    
 
INSERT INTO reviews(series_id, reviewer_id, rating) VALUES
    (1,1,8.0),(1,2,7.5),(1,3,8.5),(1,4,7.7),(1,5,8.9),
    (2,1,8.1),(2,4,6.0),(2,3,8.0),(2,6,8.4),(2,5,9.9),
    (3,1,7.0),(3,6,7.5),(3,4,8.0),(3,3,7.1),(3,5,8.0),
    (4,1,7.5),(4,3,7.8),(4,4,8.3),(4,2,7.6),(4,5,8.5),
    (5,1,9.5),(5,3,9.0),(5,4,9.1),(5,2,9.3),(5,5,9.9),
    (6,2,6.5),(6,3,7.8),(6,4,8.8),(6,2,8.4),(6,5,9.1),
    (7,2,9.1),(7,5,9.7),
    (8,4,8.5),(8,2,7.8),(8,6,8.8),(8,5,9.3),
    (9,2,5.5),(9,3,6.8),(9,4,5.8),(9,6,4.3),(9,5,4.5),
    (10,5,9.9),
    (13,3,8.0),(13,4,7.2),
    (14,2,8.5),(14,3,8.9),(14,4,8.9);
```

## Instagram Database Clone

#### Users Schema
```sql
CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

#### Photos Schema
```sql
CREATE TABLE photos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id)
);
```

#### Comments Schema
```sql
CREATE TABLE comments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR(255) NOT NULL,
    photo_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);
```

#### Likes Schema
```sql
CREATE TABLE likes (
    user_id INTEGER NOT NULL,
    photo_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    PRIMARY KEY(user_id, photo_id)
);
```

#### Followers Schema
```sql
CREATE TABLE follows (
    follower_id INTEGER NOT NULL,
    followee_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(follower_id) REFERENCES users(id),
    FOREIGN KEY(followee_id) REFERENCES users(id),
    PRIMARY KEY(follower_id, followee_id)
);
```

#### Hashtags Schema
```sql
CREATE TABLE tags (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE photo_tags (
    photo_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    FOREIGN KEY(tag_id) REFERENCES tags(id),
    PRIMARY KEY(photo_id, tag_id)
);
```

### Working with lots of Instagram data

#### Find the 5 oldest users
We want to reward our users who have been around the longest  
```sql
SELECT * 
FROM users
ORDER BY created_at
LIMIT 5;
```

#### What day of the week do most users register on ?
We need to figure out when to schedule an ad campgain  
```sql
SELECT 
    DAYNAME(created_at) AS day,
    COUNT(*) AS total
FROM users
GROUP BY day
ORDER BY total DESC
LIMIT 2;
```

#### Find the users who have never posted a photo
We want to target our inactive users with an email campaign  
```sql
SELECT username
FROM users
LEFT JOIN photos
    ON users.id = photos.user_id
WHERE photos.id IS NULL;
```

#### Identify most popular photo (and user who created it)
We're running a new contest to see who can get the most likes on a single photo  
```sql
SELECT 
    username,
    photos.id,
    photos.image_url, 
    COUNT(*) AS total
FROM photos
INNER JOIN likes
    ON likes.photo_id = photos.id
INNER JOIN users
    ON photos.user_id = users.id
GROUP BY photos.id
ORDER BY total DESC
LIMIT 1;
```

#### Calculate average number of photos per user
Our Investors want to know...  
How many times does the average user post?  
```sql
SELECT (SELECT Count(*) 
        FROM   photos) / (SELECT Count(*) 
                          FROM   users) AS avg;
```

#### What are the top 5 most commonly used hashtags ?  
A brand wants to know which hashtags to use in a post  
```sql
SELECT tags.tag_name, 
       Count(*) AS total 
FROM   photo_tags 
       JOIN tags 
         ON photo_tags.tag_id = tags.id 
GROUP  BY tags.id 
ORDER  BY total DESC 
LIMIT  5;
```

#### Find the bots - users who have liked every single photo on the site
We have a small problem with bots on our site...  
Using **HAVING** keyword  
```sql
SELECT username, 
       Count(*) AS num_likes 
FROM   users 
       INNER JOIN likes 
               ON users.id = likes.user_id 
GROUP  BY likes.user_id 
HAVING num_likes = (SELECT Count(*) 
                    FROM   photos); 
```

## Join Us (A start-up mailing list application)

```Shell
npm init -y
```

#### Faker (generates fake data)
Find Faker Docs [Here](https://github.com/marak/Faker.js/)  
  
Step 1: Install Faker via command line  
```Shell
npm install faker
```
  
Step 2: Require it inside of a JS file (index.js)  
```JavaScript
var faker = require('faker');
```
  
Step 3: Use Faker to Generate a new address  
```JavaScript
function generateAddress(){
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
}
generateAddress();
```

### Connecting Node to MySQL

#### Step 1: Install the MySQL Node Package
You can also use the _mysql_ package, but we will use _mysql2_ as it is a more recent version.  
Open terminal and run:  
```Shell
npm install mysql2
```

#### Step 2: Connect to Database
```JavaScript
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'join_us'
})
```
  
In case you get an error, try this:  
```Shell
SELECT user,authentication_string,plugin,host FROM mysql.user where user='root';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
```
  
#### Step 3: Run Queries 
Running a super simple SQL query like:  
```sql
SELECT 1 + 1;
```
  
Open _index.js_ and enter:  
```JavaScript
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results[0].solution);
})
```

### Creating our Schema 

Create _schema.sql_ and enter the following queries in it:  

#### Creating Our Users Table 
```sql
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);
```

#### Insert users
```sql
INSERT INTO users (email) VALUES('Katie34@yahoo.com'), ('Tunde@gmail.com');
```

#### Run our sql file
```sql
SOURCE schema.sql
```

#### Check that users are added
```sql
SELECT * FROM users;
```

#### To SELECT all users from database:
```JavaScript
const q = "SELECT * FROM users"
connection.query(q, function(error, results, fields){
    if(error) throw error;
    console.log(results);
})
connection.end()
```

#### Inserting using Node
Add this piece of code before you select all users from database  
```JavaScript
const person = {
    email: faker.internet.email(),
    created_at: faker.date.past()
};
 
const end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
  if (err) throw err;
  console.log(result);
});
```

#### Bulk Inserting 500 Users
```JavaScript
const data = [];
for(let i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
const q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
connection.end();
```

#### View Users
```sql
SELECT * FROM users;
```

### 500 Users Exercise

#### Find Earliest Date A User Joined
```sql
SELECT 
    DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date 
FROM users;
```

#### Find Email Of The First/Earliest User (HINT: SUBQUERY)
```sql
SELECT * 
FROM   users 
WHERE  created_at = (SELECT Min(created_at) 
                     FROM   users);
```

#### Show Users According To The Month They Joined
```sql
SELECT Monthname(created_at) AS month, 
       Count(*)              AS count 
FROM   users 
GROUP  BY month 
ORDER  BY count DESC;
```

#### Count Number of Users With Yahoo Emails
```sql
SELECT Count(*) AS yahoo_users 
FROM   users 
WHERE  email LIKE '%@yahoo.com';
```

#### Calculate Total Number of Users for Each Email Host
```sql
SELECT CASE 
         WHEN email LIKE '%@gmail.com' THEN 'gmail' 
         WHEN email LIKE '%@yahoo.com' THEN 'yahoo' 
         WHEN email LIKE '%@hotmail.com' THEN 'hotmail' 
         ELSE 'other' 
       end      AS provider, 
       Count(*) AS total_users 
FROM   users 
GROUP  BY provider 
ORDER  BY total_users DESC;
```

### Moving on to the WebApp 

**Working with express**
```Shell
npm i express
```

#### Add to your index.js file
```JavaScript
const express = require('express');
const app = express();

app.get("/", function(req, res){
 res.send("HELLO FROM OUR WEB APP!");
});
 
app.listen(8080, function () {
 console.log('App listening on port 8080!');
});
```

#### Remember to start the server up
```Shell
node index.js
```

#### Adding Multiple Routes
  
Add a '/joke' route:  
```JavaScript
app.get("/joke", function(req, res){
 const joke = "What do you call a dog that does magic tricks? A labracadabrador.";
 res.send(joke);
});
```
  
Add a '/random_num' route:  
```JavaScript
app.get("/random_num", function(req, res){
 const num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});
```

#### Connecting Express and MySQL
Add the MySQL code inside of the root route:  
```JavaScript
app.get("/", function(req, res) {
   const q = 'SELECT COUNT(*) as count FROM users';
   connection.query(q, function (error, results) {
       if (error) throw error;
       var msg = "We have " + results[0].count + " users";
       res.send(msg);
   });
});
```

#### Adding EJS Templates
```Shell
npm i ejs
```

```html
<h1>JOIN US</h1>
 
<p class="lead">Enter your email to join <strong><%= count %></strong> 
others on our waitlist. We are 100% not a cult. </p>
 
<form method="POST" action='/register'>
 <input type="text" class="form" name="email" placeholder="Enter Your Email">
 <button>Join Now</button>
</form>
```

#### Connecting the Form
The '/register' post route:  
```JavaScript
app.post('/register', function(req,res) {
     var person = {email: req.body.email};
     connection.query('INSERT INTO users SET ?', person, function(err, result) {
         console.log(err);
         console.log(result);
         res.redirect("/");
     });
});
```

#### Using Body Parser
Want **zero warnings** ?  
```JavaScript
// Express v4.16.0 and higher
// --------------------------
const express = require('express');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// For Express version less than 4.16.0
// ------------------------------------
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
```

## Database Triggers
SQL statements that are AUTOMATICALLY RUN when a specific table is changed  
#### Syntax
```sql
CREATE TRIGGER trigger_name 
    trigger_time trigger_event ON table_name FOR EACH ROW
    BEGIN
    ...
    END;
```
trigger_time: BEFORE, AFTER
trigger_event: INSERT, UPDATE, DELETE
ON
table_name: photos, users  

#### A simple validation
```sql
DELIMITER $$

CREATE TRIGGER must_be_adult
     BEFORE INSERT ON users FOR EACH ROW
     BEGIN
          IF NEW.age < 18
          THEN
              SIGNAL SQLSTATE '45000'
                    SET MESSAGE_TEXT = 'Must be an adult!';
          END IF;
     END;
$$

DELIMITER ;
```
NEW.age: Refers to data that is about to be inserted  
  
**MySQL Errors**
A numeric error code (1146). This number is MySQL-specific  
  
A five-character SQLSTATE value ('42S02').  
The values are taken from ANSI SQL and ODBC and are more standardized.  
  
A message string - textual description of the error  
  
#### Preventing Self-Follows 
```sql
DELIMITER $$

CREATE TRIGGER example_cannot_follow_self
     BEFORE INSERT ON follows FOR EACH ROW
     BEGIN
          IF NEW.follower_id = NEW.followee_id
          THEN
               SIGNAL SQLSTATE '45000'
                    SET MESSAGE_TEXT = 'Cannot follow yourself, silly';
          END IF;
     END;
$$

DELIMITER ;
```

#### Logging Unfollows
```sql
DELIMITER $$

CREATE TRIGGER create_unfollow
    AFTER DELETE ON follows FOR EACH ROW 
BEGIN
    INSERT INTO unfollows
    SET follower_id = OLD.follower_id,
        followee_id = OLD.followee_id;
END$$

DELIMITER ;
```

### Managing Triggers

#### Listing Triggers
```sql
SHOW TRIGGERS;
```

#### Removing Triggers
```sql
DROP TRIGGER trigger_name;
```
**A WORD OF WARNING  
Triggers can make debugging hard!**

For more information, [go to](https://github.com/kaitou-1412/SQL-Tutorials)