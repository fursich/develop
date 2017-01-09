# 開発環境準備

* **rbenvの設定**  

$ echo "gem: --no-ri --no-rdoc" > ~/.gemrc  
$ git clone https://github.com/sstephenson/rbenv.git ~/.rbenv  
$ echo 'export PATH="$PATH:$HOME/.rbenv/bin:$HOME/.rbenv/plugins/ruby-build/bin"' >> ~/.bashrc  
$ echo 'eval "$(rbenv init -)"' >> ~/.bashrc  

 **ruby-buildのセットアップ**  
$ git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build  
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ‾/.bashrc  
$ exec $SHELL  

 **rubyのインストール**  
 $ rbenv install -l  
$ CONFIGURE_OPTS="--with-readline-dir=/usr/include/readline" rbenv install 2.3.1  
$ rbenv global 2.3.1  


* **Git用プロファイル設定（名前、メールアドレス）**  

$ git config --global user.name "John Doe"  
$ git config --global user.email johndoe@example.com  

* **開発アプリケーションの準備**  

$ git clone git@github.com:potepancamp/develop.git  
$ cd develop  
$ bundle install --path vendor/bundle  
$ bundle exec rails db:migrate  

【エラーが出た時】  
**************************************************
        rake  db:create  
Database 'db/development.sqlite3' already exists  
Created database 'db/test.sqlite3'  
     running  migrations  
        rake  db:migrate VERBOSE=false  
FATAL: Listen error: unable to monitor directories for changes.  
Visit https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers for info on how to fix this.  
     loading  seed data  
        rake  db:seed  
FATAL: Listen error: unable to monitor directories for changes.  
Visit https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers for info on how to fix this.  
     loading  sample data  
        rake  spree_sample:load  
FATAL: Listen error: unable to monitor directories for changes.  
Visit https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers for info on how to fix this.  
      insert  config/routes.rb  
**************************************************

【以下を実行】  
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p   

* Server 起動  

$ bundle exec rails server -b 0.0.0.0  

* Potepan TOP ページ  

host:3000/potepan/index.html  

* Solidus TOP ページ  

host:3000  
