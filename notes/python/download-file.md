---
title: Downloading file
tags:
  - Python
emoji: 📦
---

![Screenshot of Python script that downloads files.](./images/python-download-file.jpg)


```python
from urllib.request import urlretrieve

url = input('URL: ')
filename = url.split('/')[-1]
urlretrieve(url, filename)
print("Downloaded file: {}".format(filename))
```