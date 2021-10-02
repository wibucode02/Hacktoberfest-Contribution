mysql -u root -N -e 'show databases' | while read dbname; do mysqldump -u root --complete-insert --routines --triggers --single-transaction "$dbname" > ~/Downloads/"$dbname".sql; done
