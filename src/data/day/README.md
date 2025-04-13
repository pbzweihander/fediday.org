# Days data

Add your memorable Fediverse day here with yaml file!

## Format

```yaml
# Date of the day in `YYYY-MM-DD` format.
# If you do not want to specify the year, use `0000` instead.
# Required.
date: "2025-04-11"

# Related link
# Optional.
link: https://fediday.org

# Name of the day
name:
  # English name of the day
  # Required. Fallback language
  en: Fediverse Day
  # You can add other language
  # Currently supported languages: ko, ja, zh-CN
  #ko: 연합우주의 날
  #ja: フェディバースの日
  #zh-CN: 联邦宇宙日

# Description of the day
# Optional
description:
  # If you want to provide description, `en` field is required. Fallback language
  en: The day of the Fediverse of the Fediversian people!
  # You can add other language
  # Currently supported languages: ko, ja, zh-CN
  #ko: 연합우주인들의 연합우주의 날
  #ja: フェディバースの人々のフェディバースの日
  #zh-CN: 联邦宇宙人的联邦宇宙日
```
