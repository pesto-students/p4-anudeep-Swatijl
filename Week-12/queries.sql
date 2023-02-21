
-- Find the item that has minimum weight
SELECT MIN(WEIGHT) FROM ITEMS;

-- Find the different warehouses in “Pune”
SELECT WAREHOUSES.WNAME FROM WAREHOUSES 
INNER JOIN CITIES 
ON CITIES.CITY_ID=WAREHOUSES.CITY_ID
where CITIES.CITY="Pune";

-- Find the details of items ordered by a customer “Mr. Patil”
SELECT ORDERS.ONO, ORDERS.ODATE, ORDERS.CUSTOMER_ID FROM ORDERS
INNER JOIN CUSTOMER
ON ORDERS.CUSTOMER_ID=CUSTOMER.CNO
where CUSTOMER.CNAME="Mr. Patil";

-- Find a Warehouse which has maximum stores


-- Find an item which is ordered for a minimum number of times.


-- Find the detailed orders given by each customer
SELECT * FROM ORDERS
INNER JOIN ORDERS_ITEMS_RELATION as oi
ON oi.ORDER_ID=ORDERS.ONO
INNER JOIN ITEMS 
ON ITEMS.ITEMNO=oi.ITEM_ID;