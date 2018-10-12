        function ecco(){  document.getElementById("innerHTMLtxt").innerHTML = a;  }
            lic0=['0', '1', '4', '5', '8', '10' ];//GPL
            lic1=['0', '2', '4', '6', '8', '9'];//BSD
            lic2=['0', '2', '4', '6', '8', '9'];//MIT
            lic3=['0', '1', '4', '5', '7', '9'];//Mozila public license
            lic4=['0', '0', '3', '6', '8', '9'];//Apache software license

                a=['-1', '0', '0', '0', '0', '0',];  //Пустой массив для сравнений
        function f(x) {
                    
                   
   //  document.getElementsByName("one").style.backgroundColor = "red"; 
    
     
    
           
           
            if(x==0){a[0]=x;      
            document.getElementsByName(x)[0].style.backgroundColor = "#58effc";
           }  
            if(x>=1 && x<=2){a[1]=x; 
            document.getElementsByName(1)[0].style.backgroundColor = "#fff";
            document.getElementsByName(2)[0].style.backgroundColor = "#fff";
            document.getElementsByName(x)[0].style.backgroundColor = "#58effc";} 
            if(x>=3 && x<=4){a[2]=x;
            document.getElementsByName(3)[0].style.backgroundColor = "#fff";
            document.getElementsByName(4)[0].style.backgroundColor = "#fff";
            document.getElementsByName(x)[0].style.backgroundColor = "#58effc";
                             
          }
            if(x>=5 && x<=6){a[3]=x;
            document.getElementsByName(5)[0].style.backgroundColor = "#fff";
            document.getElementsByName(6)[0].style.backgroundColor = "#fff";
            document.getElementsByName(x)[0].style.backgroundColor = "#58effc";}
            if(x>=7 && x<=8){a[4]=x;
            document.getElementsByName(7)[0].style.backgroundColor = "#fff";
            document.getElementsByName(8)[0].style.backgroundColor = "#fff";
            document.getElementsByName(x)[0].style.backgroundColor = "#58effc"; 
                            }
            if(x>=9 && x<=10){a[5]=x;
            document.getElementsByName(9)[0].style.backgroundColor = "#fff";
            document.getElementsByName(10)[0].style.backgroundColor = "#fff";
            document.getElementsByName(x)[0].style.backgroundColor = "#58effc";                
                             
                             }
                
           // ecco(); //вывод на экран
            check(); //проверка лицензий на соответствие
     
   
                
            
        } 

     proc=0;
                
    function check(){   
        
                for(i=0;i<=5;i++){
                if(a[i]==lic0[i]){ //1-ая строка вариантов  
                proc+=1;                 
                }
            }
                proc /=6;
                document.getElementById("sovp").innerHTML = "<br>Совпадений<br> GPL " + Math.round(proc*100 )+ "%";
                proc=0;  
        
/*--------------------------*/       
           for(i=0;i<=5;i++){
                if(a[i]==lic1[i]){ //1-ая строка вариантов  
                proc+=1;                 
                }
            }
                proc /=6;
                document.getElementById("sovp").innerHTML += "<br> BSD " +  Math.round(proc*100) + "%";
                proc=0; 
        
 /*--------------------------*/       
           for(i=0;i<=5;i++){
                if(a[i]==lic2[i]){ //1-ая строка вариантов  
                proc+=1;                 
                }
            }
                proc /=6;
                document.getElementById("sovp").innerHTML += "<br> MIT " +  Math.round(proc*100) + "%";
                proc=0; 
        
/*--------------------------*/       
           for(i=0;i<=5;i++){
                if(a[i]==lic3[i]){ //1-ая строка вариантов  
                proc+=1;                 
                }
            }
                proc /=6;
                document.getElementById("sovp").innerHTML += "<br> Mozila public license " +  Math.round(proc*100) + "%";
                proc=0; 
                
 /*--------------------------*/       
           for(i=0;i<=5;i++){
                if(a[i]==lic4[i]){ //1-ая строка вариантов  
                proc+=1;                 
                }
            }
                proc /=6;
                document.getElementById("sovp").innerHTML += "<br> Apache software license " +  Math.round(proc*100) + "%";
                proc=0; 
                       
        
        }

