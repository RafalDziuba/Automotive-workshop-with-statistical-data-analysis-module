## Engineering project
# Live version is available: ** workshop-stats.netlify.app **
# login: administrator
# password: secure_password
Hello!

## What it is?
This app collects orders, generates statistics and analyzes them. There is some of statistical methods, if you're interested here You can see more about them:
1. Chi-square: https://www.statisticshowto.com/probability-and-statistics/chi-square/
2. V-Cramer: https://www.ibm.com/docs/en/cognos-analytics/11.1.0?topic=terms-cramrs-v \
\
There You can see a lot of working with DOM, events **and API skills**. To write this project, I used Vanilla JS. 

## Features:
1. Login/logut 
2. Adding orders
3. Preview all orders, delete them and view details
4. Statistical insights with analysis and intepretation, based on orders

I know, that this project needs a huge refactoring, and there is a lot of bad practices (code repeating for example) - I'm aware of that. 
In future, when I learn React enough, I will rewrite this whole project in React (I'm currently learning it). \
**Live version isn't available at this moment.** \
Below You can see some screenshots from this project:

Home page(after successful login):
![Home page view](https://github.com/RafalDziuba/Automotive-workshop-with-statistical-data-analysis-module/blob/main/img/home-page.PNG) 
Home page (rest of form):
![Home page form view](https://github.com/RafalDziuba/Automotive-workshop-with-statistical-data-analysis-module/blob/main/img/form.PNG) 

Orders:
![Orders page view](https://github.com/RafalDziuba/Automotive-workshop-with-statistical-data-analysis-module/blob/main/img/orders-1.PNG)

Orders detail:
![Single order details view](https://github.com/RafalDziuba/Automotive-workshop-with-statistical-data-analysis-module/blob/main/img/orders-eye-click.PNG) 

Table of observed values:
![Table of observed values view](https://github.com/RafalDziuba/Automotive-workshop-with-statistical-data-analysis-module/blob/main/img/stats-table1.PNG)  

Table of expected values and table with chi-square calculations:
![Table of expected values and table with chi-square calculations view](https://github.com/RafalDziuba/Automotive-workshop-with-statistical-data-analysis-module/blob/main/img/stats%20table%202%203.PNG) 

Interpretation: 
![Interpretation calculations view](https://github.com/RafalDziuba/Automotive-workshop-with-statistical-data-analysis-module/blob/main/img/vc.PNG)

And there is how this interpretation value changes:
```javascript const text = document.getElementById('vci');
            if (vcValue > 0 & vcValue < 0.2) {
                text.textContent = 'Very weak relation';
            } else if (vcValue > 0.2 & vcValue < 0.4 ) {
                text.textContent = 'Weak relation';
            } else if (vcValue > 0.4 & vcValue < 0.6) {
                text.textContent = 'Moderate relation';
            } else if (vcValue > 0.6 & vcValue < 0.8) {
                text.textContent = 'Strong relation';
            } else if (vcValue > 0.8 & vcValue < 1){
                text.textContent = 'Very strong relation'
            } else {
                text.textContent = 'Bad value!'
            } ```
