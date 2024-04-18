# MySQL schema for fan emails in a portfolio site
DROP SCHEMA IF EXISTS fan_emails_local_db;

create schema if not exists fan_emails_local_db;

use fan_emails_local_db;

drop table if exists fan_emails;

#
# TABLEs
#
CREATE TABLE fan_emails (
                       fanId INT AUTO_INCREMENT PRIMARY KEY,
                       fanEmail VARCHAR(75) NOT NULL,
                       entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

#
# INDEXEs
#
create index useEmail_ix
    on fan_emails(fanEmail);