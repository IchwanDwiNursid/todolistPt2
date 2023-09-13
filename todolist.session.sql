CREATE TABLE data_todo (
    name VARCHAR(100),
    status BOOLEAN
)engine=InnoDB;


show tables;


alter table data_todo
add column id varchar(100) after name  AUTO_INCREMENT PRIMARY KEY (id);

select * from data_todo;
