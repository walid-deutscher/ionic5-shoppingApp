

# ionic5-shoppingApp

 


### got cmd  c:\
 ### git clone   https://github.com/walid-deutscher/ionic5-shoppingApp.git

### \ionic5-shoppingApp> npm install

### npm install


###image of Application :

![ionic5-shoppingApp](https://raw.githubusercontent.com/walid-deutscher/ionic5-shoppingApp/master/images/01.png)





## discription



Services floder

api=>shop  + messages
auth=> login+ register
services=> auth-guard.service // guard of pages when not login
service file
lo.guard.ts // guard of page login  when  login



Shared compent
costumer header


Pages

home==> show all product + sreach 
list==> show content of product
message => show messages sent  from other
msg==>  for send messge aboute some product
add-paroduct=> crud of only my product
login=> login page


Environments
add your apki key





Table in fire base(firestore).

   shop (add empty table without any fieled)
      +
   messages(add empty table without any fieled)




add some rules in firebase




just example for rules


shop/{id}{
       
      allow create: if request.auth.uid == request.resource.data.par  
      allow update, delete: if request.auth.uid == resource.data.data.par;

	  }










## ionic serve



#for build  android

### ionic5-shoppingApp>  ionic cordova build android --prod








 
 
<img src='https://raw.githubusercontent.com/walid-deutscher/ionic5-shoppingApp/master/images/1%20(1).png' width='200px' height='350px'>
<img src='https://raw.githubusercontent.com/walid-deutscher/ionic5-shoppingApp/master/images/1%20(4).png' width='200px' height='350px'>

<img src='https://raw.githubusercontent.com/walid-deutscher/ionic5-shoppingApp/master/images/1%20(5).png' width='200px' height='350px'>


<img src='https://raw.githubusercontent.com/walid-deutscher/ionic5-shoppingApp/master/images/1%20(2).png' width='200px' height='350px'>


<img src='https://raw.githubusercontent.com/walid-deutscher/ionic5-shoppingApp/master/images/1%20(3).png' width='200px' height='350px'>





