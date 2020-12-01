!#/bin/bash

cd /root/carols
git stash
git checkout master
yarn
ng build
rm -rf /var/www/html/*
cp dist/carols/* /var/www/html/
