import { client } from "./client";

// generate me a seeder to insert data into product table
client.exec(`
    INSERT INTO product (name, price) VALUES ('Product 1', 100);
    INSERT INTO product (name, price) VALUES ('Product 2', 200);
    INSERT INTO product (name, price) VALUES ('Product 3', 300);
`);
