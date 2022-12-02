CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

INSERT INTO "pizza" ("name", "description", "price", "image_path")
VALUES ('Tomato Soup','If you like pizza, but you hate the toppings, the cheese, and the crust, you''ll love this!',12.99,'images/tomatosoup.jpeg'),
('Onomatopizza','We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you''ll SMACK your lips.',14.99,'images/baconpizza.jpeg'),
('Pepperoni','Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.',14.99,'images/pepperoni.jpeg'),
('Over the Rainbow','Taste the rainbow! One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion. Complimentary water served in a spray bottle to taste an actual rainbow.',19.99,'images/rainbow.jpeg'),
('Chinese Firedragon','Pepperoni, pineapple and banana peppers.',15.99,'images/firedragon.jpeg'),
('Bad Date','Garlic, Onion and Pepperoni.',24.99,'images/baddate.jpeg'),
('Another Little Pizza My Heart', 'Cheese Pizza. Personal size only.', 5.99,'images/cheese.jpeg');

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"street_address" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT NOT NULL
);

-- Updates for new pictures

update "pizza" set "image_path" = 'images/baconpizza.jpeg' 
where "name" = 'Onomatopizza';

update "pizza" set "image_path" = 'images/tomatosoup.jpeg' 
where "name" = 'Tomato Soup';

update "pizza" set "image_path" = 'images/pepperoni.jpeg' 
where "name" = 'Pepperoni';

update "pizza" set "image_path" = 'images/rainbow.jpeg' 
where "name" = 'Over the Rainbow';

update "pizza" set "image_path" = 'images/firedragon.jpeg' 
where "name" = 'Chinese Firedragon';

update "pizza" set "image_path" = 'images/baddate.jpeg' 
where "name" = 'Bad Date';

update "pizza" set "image_path" = 'images/cheese.jpeg' 
where "name" = 'Another Little Pizza My Heart';