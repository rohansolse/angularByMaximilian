branch=`git rev-parse --abbrev-ref HEAD`
echo "\e[36m ***** The branch you are working on is :\e[0m \e[32m $branch \e[0m"
echo "\e[36m ***** Executing :\e[0m \e[32mgit add . \e[0m"
git add .
echo "Enter your message : \c"
read msg
echo "\e[36m ***** Executing :\e[0m \e[32mgit commit -m $msg \e[0m"
git commit -m "$msg"
echo "\e[36m ***** Executing :\e[0m \e[32mgit pull origin $branch \e[0m"
git pull origin $branch
echo "\e[36m ***** Executing :\e[0m \e[32mgit pull origin $branch \e[0m"
git push origin $branch
