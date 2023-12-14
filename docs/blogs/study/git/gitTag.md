## git tag 操作

### `git tag`的基本用法
+ 查看本地分支标签
```js
git tag
或者
git tag -l
或者
git tag --list
```
+ 查看远程所有标签
```js
git ls-remote --tags
或者
git ls-remote --tag
```
+ 给当前分支打标签
```js
git tag {标签名}
例如： git tag v1.1.0
```
+ 给特定的某个`commit`版本打标签，比如现在某次提交的`id`为039bf8b
```js
git tag v1.0.0 039bf8b
或者可以添加注释
git tag v1.0.0 -m "add tags information" 039bf8b
或者
git tag v1.0.0 039bf8b -m "add tags information"
```
+ 删除本地某个标签
```js
git tag --delete v1.0.0
或者
git tag -d v1.0.0
或者
git tag --d v1.0.0
```
+ 删除远程的某个标签
```js
git push -d origin v1.0.0
或者
git push --delete origin v1.0.0
或者
git push origin -d v1.0.0
或者
git push origin --delete v1.0.0
或者
git push origin :v1.0.0
```
+ 将本地标签一次性推送到远程
```js
git push origin --tags
或者
git push origin --tag
或者
git push --tags
或者
git push --tag
```
+ 将本地某个特定标签推送到远程
```js
git push origin v1.0.0
```
+ 查看某一个标签的提交信息
```js
git show v1.0.0
```
只要把以上几个命令熟练了，平时发布版本后想<b>打标签</b>基本可以说是手到擒来了<br />
+ 根据某个`commit`创建本地分支
例如：当前分支的某个`commit id = 12345678`，我们可以基于这个`id`创建本地分支
```js
git checkout 12345678 -b {新分支名称}
```

### 通过`Tag`标签回退版本修复bug

#### 打标签
1. 新建一个文件`a.txt`，然后写
```
第一次发布版本
```
用一下命令来提交：
```js
git add a.txt
git commit -m "第一次发布版本"
```
提交完毕，可以使用下面的命令来查看提交的日志记录：
```
git log
```
<img src="/image/blogs/study/git/gitTag/tag01.png" style="width: 450px;" />

2. 发布版本之后就要打标签了，命令如下：
```js
git tag -a v1.0 -m "v1.0版本发布"
``` 
然后查看所有标签用下面命令：
```js
git tag
```
<img src="/image/blogs/study/git/gitTag/tag02.png" style="width: 450px;" />
也可以查看某个标签的详情：

```js
git show v1.0
```
<img src="/image/blogs/study/git/gitTag/tag03.png" style="width: 550px;" />
上面是打标签的时候写的备注，下面是标签记录的那次提交的备注，其实标签只是对某一次提交记录起了一个别名而已，不要以为通过标签一下子就能拉区代码

3. 在`a.txt`中增加一行“第二次发布版本”，然后用
```js
git add a.txt
git commit -m "第二次发布版本"
```
命令提交，但是不需要打标签

4. 在`a.txt`中再增加一行“第三次发布版本”，然后用
```js
git add a.txt
git commit -m "第三次发布版本"
```
命令提交，也不需要打标签，这样我们就模拟了在第一次发布版本，打完标签后，我们向前继续开发，`a.txt`内容如下：
```
第一次发布版本
第二次发布版本
第三次发布版本
```
用`git log`命令查看，如下图：
<img src="/image/blogs/study/git/gitTag/tag04.png" style="width: 600px;" />

<b> 到此我们就模拟完成了，这个时候发现第一次的版本有个`bug`，需要修复，下面我们来完成这个需求</b>

#### 通过标签恢复代码
:::tip 试验总结
经本人实操，总结出方式1、方式2，两种方式效果相同，均可实现版本回退<br />
<b>方式1：</b>从主干分支切出一个新分支，查看标签详情，实现版本回退，然后将新分支合并到主干分支上<br />
<b>方式2：</b>在主干分支上查看标签详情，版本回退，马上切出新分支；紧接着切回主干分支，撤销版本回退；在新分支上修复bug，将新分支合并到主干分支上<br />
因两种方式只是部分顺序不同，效果一样，下文将以<b>方式2</b>进行展开讲述
:::

5. 查看标签的详情，找出打标签的那次提交的`commit id`
```js
git tag
git show v1.0
```
<img src="/image/blogs/study/git/gitTag/tag05.png" style="width: 600px;" />

`commit id` 这么长记不住怎么办呢？别担心，我们只需要记住前面几位就可以了，这里我们只取前6位：7441b8。Git会根据前面几位自动识别的，当然，你的commit id跟我的肯定是不一样的。

6. 版本回退
下面我们就通过`commit id`回到发版本时候的代码去喽:
```js
git reset --hard 7441b8
```
注意把7441b8换成你的`commid id`。回退完毕，再看a.txt:
```
第一次发版本
```
如果有乱码的话，改成以UTF-8无BOM格式编码。看到没，我们又回到了第一次发版本时候的代码，是不是有点小激动啊<br />
如果这个时候你立马投入与`bug`的战斗，修改后发版本，那么你就犯了严重的错误，因为你修改后的代码是无法与正在开发的版本合并哒，也就是说你的修改并不能加入现有的代码。所以:

:::tip 特别注意
通过标签回退版本后，要马上拉一个分支，然后当前主干分支要立即回到原来的位置，否则正在开发的代码可能白干了，接着在刚拉的分支上修改bug，修改完毕合并到主干上
:::

7. 切新分支
回退版本后，立即切出新分支，这里取名`bugfix`分支：
```js
git checkout -b bugfix
```
如图所示，我们已经在`bugfix`分支上了：
<img src="/image/blogs/study/git/gitTag/tag06.png" style="width: 450px;" />

8. 主干分支立即回到原来的位置
首先，请先回到主干分支上：
```
git checkout master
```
回退版本需要`commit id`，向前进呢，同样也是的。还记得我在第三次提交完毕后，用`git log`命令查看提交记录吗，现在我们需要第三次提交的`commit id`，再用`git log`命令：
<img src="/image/blogs/study/git/gitTag/tag07.png" style="width: 450px;" />

可以看到只有第一次的提交记录了，因为这个时候版本回退了`git log`是查不到第三次提交记录的，怎么办呢，怎么才能回去呢？<br />

别急，这个时候，我们用下面这个命令：
```js
git reflog
```
<img src="/image/blogs/study/git/gitTag/tag08.png" style="width: 450px;" />

看到了吗，你所有的操作记录都在这儿，这就是git，记录操作。可以看到第三次的`commit id`是 7358a51。回去喽：
```js
git reset --hard 7358a51
```
再看a.txt:
```
第一次发版本
第二次发版本
第三次发版本
```
回到最新的版本啦

9. 切换到bugfix分支，修改bug
```js
git checkout bugfix
```
这时`a.txt`只有一行文字，因为我们的`bugfix`分支是回退版本到第一次提交时拉取的分支，接着我们加一行”修复第一次发版本的紧急`bug`”:
```
第一次发版本
修复第一次发版本的紧急bug
```
接着用命令
```
git add a.txt
git commit -m "修复第一次发版本的紧急bug"
git tag v2.0
```
提交这次修改，修改完毕，再打个标签，一般标签的版本要升一级,这样下次再出`bug`了，就直接从这儿改起，也就可以在合并后直接删除`bugfix`分支了

10. 合并到主干上
在`bugfix分支`上修复了紧急bug之后，就可以发一个新的版本，之后就要把修复后的代码合并到我们的主干上，不然下次发版本这个bug还是存在的。合并用下面的命令:
```js
git checkout master //先切换到主干上
git merge bugfix    //再合并修改bug的分支
```

这个时候，你可以在心里默念，神兽保佑，没有冲突。然而这并没有什么卵用，你念或不念，冲突就在那里，不多不少。
这个时候可以用` git status` 命令查看谁发生了冲突：
<img src="/image/blogs/study/git/gitTag/tag09.png" style="width: 550px;" />

从上图可以看到两个分支都修改了`a.txt`,这个时候再来看`a.txt`:
```
第一次发版本
<<<<<<< HEAD
第二次发版本
第三次发版本
=======
修复第一次发版本的紧急bug
>>>>>>> bugfix
```
其中<<<<<<Head到======这个是当前分支，也就是master分支的内容，从======到>>>>>>>bugfix，是bugfix分支的内容
修改冲突很简单啦，把多余的内容去掉就可以了
```
第一次发版本
修复第一次发版本的紧急bug
第二次发版本
第三次发版本
```
提交代码就解决冲突了

11. 推送标签到远程
在实际开发中我们都是关联了远程仓库的，在提交完代码后我们一般用`git push`将代码推送到远程仓库中，但是`git push`命令是不会推送标签的，这点一定要注意
> 标签必须手动推送到远程仓库

可以用下面的命令一次推送所有标签到远程：
```js
git push origin --tags
```

好了，到这里我们就完成了通过标签修复线上版本的紧急`bug`，这个时候你就可以删掉本地分支`bugfix`了，但是不建议你这么做，搞不好线上又出个`bug`，你就可以直接接着改啦，反正是在本地的分支

#### `tag`版本回退步骤总结
1. 主分支回退到打标签的那次提交
2. 拉取分支bugfix
3. 主分支立即回到最新状态
4. 切换到bugfix分支，修改bug，发版本，打新标签
5. 合并bugfix分支到主干上
6. 手动推送标签到远程

参考文献：[廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/896043488029600)
