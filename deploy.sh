!#/bin/bash

cd /root/carols
git stash
git checkout master
git pull
yarn
ng build --prod=true
rm -rf /var/www/html/*
cp dist/carols/* /var/www/html/
