# iOS逆向相关知识

## 从ipa包中批量提取素材
``` shell
echo $0
# 请先cd到ipa文件父文件夹
mkdir ~/Assets
for ipa in `find . -iname '*.ipa' -type f -maxdepth 1`
do
# new="${ipa}.zip"
echo $ipa
# cp "$img" ~/Assets/"$new"
done

```