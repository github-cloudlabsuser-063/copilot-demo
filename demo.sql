-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10, 2)
);

-- insert 5 products into the table
INSERT INTO products (product_id, product_name, price) VALUES
(1, 'Apple iPhone 12', 799.99),
(2, 'Samsung Galaxy S21', 899.99),
(3, 'Google Pixel 5', 699.99),
(4, 'OnePlus 9 Pro', 999.99),
(5, 'Xiaomi Mi 11', 599.99);

