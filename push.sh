#!/bin/bash

npm run build
git add -A
git commit -m "$1"
git push