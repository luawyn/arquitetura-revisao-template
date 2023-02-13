
CREATE TABLE brands (
  id TEXT UNIQUE PRIMARY KEY NOT NULL,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE products (
  id TEXT UNIQUE PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  brand_id TEXT NOT NULL,
  FOREIGN KEY (brand_id) REFERENCES brands (id)
);

INSERT INTO brands (id, name)
  VALUES 
  ("b001", "Razer"),
  ("b002", "Logitech"),
  ("b003", "HyperX");

INSERT INTO products (id, name, price, brand_id)
  VALUES 
  ("p001", "Mouse R210", 350.99, "b001"),
  ("p002", "Headset L350", 650.99, "b002"),
  ("p003", "Teclado H830", 1200.90, "b003"),
  ("p004", "Mouse H130", 203.90, "b003"),
  ("p005", "Headset R420", 590.99, "b001");