#!/bin/bash

#read -p "Please enter your username: " user_name
#echo "Thanks for your help"
#if [ "$user_name" == "arnold"  ]
#then
#   echo "Your username is: $user_name"
#else
#   echo "You are not arnold"
#fi

echo "All params: $*"
echo "Number of params: $#"
echo "First param: $1"
echo "Second param: $2"

new_file=$(cat README.md)
echo "Here are further instructions: " $new_file
