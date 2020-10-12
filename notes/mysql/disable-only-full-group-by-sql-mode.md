---
title: Disabling ONLY_FULL_GROUP_BY sql_mode
tags:
  - MySQL
emoji: ⚙️
---

```mysql
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))
```