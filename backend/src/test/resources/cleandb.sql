# MySQL schema for fan emails in a portfolio site
DROP SCHEMA IF EXISTS portfolio_fans_local;

create schema if not exists portfolio_fans_local;

use portfolio_fans_local;

drop table if exists fan_emails;

#
# TABLEs
#
CREATE TABLE fan_emails (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       email VARCHAR(75) NOT NULL,
                       entry_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

#
# INDEXEs
#
create index useEmail_ix
    on fan_emails(email);



# INSERTs
insert into fan_emails (email) values ('test@outlook.com');
insert into fan_emails (email) values ('filler@gmail.com');
insert into fan_emails (email) values ('blank@gmail.com');
insert into fan_emails (email) values ('someEamil@gmail.com');
insert into fan_emails (email) values ('example@gmail.com');
insert into fan_emails (email) values ('moreFiller@gmail.com');
insert into fan_emails (email) values ('yourA@yahoo.com');
insert into fan_emails (email) values ('fake@outlook.com');
