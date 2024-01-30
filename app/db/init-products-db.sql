CREATE TABLE IF NOT EXISTS supermarket_products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT,
  image TEXT,
  price REAL,
  description TEXT
);
