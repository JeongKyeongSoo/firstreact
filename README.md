# First

## Component
HTML을 반환하는 함수

## Class
- state
- life cycle
    - mounting : constructor -> render -> componentDidMount
    - updating : render -> componentDidUpdate
    - unmoutning : componentWillUnMound


##
pm i react-router-dom

https://www.youtube.com/watch?v=4horUrG9-Zw&list=PL7jH19IHhOLPp990qs8MbSsUlzKcTKuCf&index=20

IIFE
Modules

## JS 초보
https://www.youtube.com/watch?v=wUHncG3VwPw&list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK

## JS 핵심
https://www.youtube.com/watch?v=QkFkFqg-J04&list=PL7jH19IHhOLMmmjrwCi7-dMFVdoU0hhgF&index=10

### T 검정
* 패키지
  * scipy.stats.ttest_rel
  * scipy.stats.ttest_ind
  * scipy.stats.ttest_1samp


* 대응표본 T 검정
```
from scipy.stats from ttest_rel
ttest_rel(a, b)
```
* One Sample 독립표본 T 검정
```
from scipy.stats from ttest_1samp
ttest_1samp(a, popmean = 1)
```
* Two Sample 독립표본 T 검정
```
from scipy.stats from ttest_ind
ttest_ind(a, b, equal_var = True)
```

### 카이제곱 검정
* 패키지 : scipy.stats.chi2_contingency

* 독립성 검정 
```
from scipy.stats import chi2_contingency
chi2_contingency(pd.crosstab()) # crosstab 형태
```

### 분산분석
* 패키지1 : scipy.stats.f_oneway
```
from scipy.stats import f_oneway
```
* 패키지2 : statsmodels.stats.anova
```
from statsmodels.formula.api import ols
from statsmodels.stats.anova import anova_1m
lm = ols(formula, df).fit()
anova_lm(lm)
```

```
from statsmodels.api as sm
from statsmodels.stats.anova import anova_lm
o = sm.ols(y, sm.add_constants(x), data = df).fit()
anova_1m(o)
```

### 분산분석 사후 검정
* 패키지 : from statsmodels.stats.multicomp import pairwise_tukeyhsd

```
from statsmodels.stats.multicomp import pairwise_tukeyhsd
pairwisetukey_hsd(df['a'], df['b'])
```


### 시계열 검정
* 패키지
  * pandas.series.rolling.mean
  * pnadas.series.ewm.mean


* 이동평균법
```
series.rolling(window = 3).mean()
```
* 지수평활법
```
series.ewm(alpha = 0.9).mean()
```

### 클러스터링
* 패키지
  * sklearn.cluster.Kmeans
  * sklearn.cluster.AgglomerativeClustering
  
  
* Columns 이 독립변수
* Hierarchical
```
from skelarn.cluster import AgglomerativeClustering
```
* KMeans
```
from sklearn.cluster import KMeans
```

### KNN
* 패키지 : sklearn.neighbors
```
from sklearn.neighbors import KNeighborsClassifier
```

### Linear Regression
* 패키지1 : sklearn.linear_model.Linear_regression
```
from sklearn.linear_mode import Linear_regression
model = linear_regression()
model.fix(x, y)
model.pred(x)
model.coef_ # 회귀계수
model.score(x, y) # 결정계수
```

* 패키지2 : statsmodels.formula.api
```
from statsmodels.formula.api import ols
formula = 'y ~ x'
ols(formula, df).fit()
print(ols.summary())
ols.predict(x)
```

* 패키지3 : statsmodels.api
```
import statsmodels.api as sm
X = sm.add_constants(x)
model = sm.OLS(Y, X).fit()
model.summary()
model.predict(X) # add_constants 필요
```

### Logistic Regression
* 패키지1 : sklearn.linear_model
```
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fix(x, y)
model.predict(x)
```

* 패키지2 : statsmodels.api.Logit
```
from statsmodels.api import Logit
model = Logit(y, x)
model.fit()
model.predict(x)
```

### Decision Tree
* 패키지 : sklearn.tree.DecisionTreeClassifier

```
from sklearn.tree import DecisionTreeClassifier
model = DecisionTreeClassifier()
model.fit(x, y)
model.predict(x)
```

### Associate Rules
* 패키지1 : apyori.apriori

```
# tr : 이차원 list
rules = apriori(tr, min_support = 0.003, min_confidence = 0.03, min_lift = 5, min_length = 2)
list(rules)
```

* 패키지2 : mlxtend

```
from mlxtend.frequent_patterns import apriori, association_rules

# 0/1, True/Value 값을 가진 dataframe
frequent = apriori(df, min_support = 0.01, use_colnames = True)
association_rules(frequent, metric = 'confidence', min_threshold = 0.01)
```

### PCA
* 패키지 : sklearn.decomposition.PCA

```
from sklearn.decomposition import PCA
model = PCA(n_components = 2)
model.fit_transform(x)
model.explained_variance # eigenvalue, 주성분 크기
model.explained_variance_ratio_ ## 설명력
model.components_ ## 주성분, 원래 성분의 사영
```

### 상관 계수
```
df.corr()
```

### Normalize
```
from sklearn.preprocessing import StandardScaler
model = StandardScaler()
model.fit_transform(x)
```

### 승산비
```
math.exp(회귀계수)
```

### 첨도, 왜도
```
Series.kurt()
Series.skew()
```

### ROC, AUC
```
from sklearn.metrics import auc
from sklearn.metrics import roc_curve
fpt, tpr, thresholds = roc_curve(df, pred_proba) # 확률임
aut(fpt, tpr)
```

### 나이브 베이즈
```
from sklearn.naive_bayes import GaussianNB
model = GaussianNB()
model.fit(x, y)
```
