git checkout develop
cp CNAME dist/CNAME
git subtree split --prefix dist -b master
git checkout master
git push -f origin master:master 
git checkout develop