//q - skip char in string
class SkipCharInString{
    public static void main(String[] args){
String a="baccad";
String ans="";
char r='b';
System.out.println(avoida(a,ans));//recursion
System.out.println(avoid(a));//recursion within variable
skip(ans,a,r);//iteration
}
//Recursive method
public static String avoida(String s,String ans){
    if(s==""){
        return ans;
    }
    char ch=s.charAt(0);
    if(ch=='c'){
        return avoida(s.substring(1),ans);
    }else{
        return avoida(s.substring(1),ans+ch);
    }
}
//recursion within variable
public static String avoid(String s){
    String ans="";
    if(s==""){
        return ans;
    }
    char ch=s.charAt(0);
    if(ch=='c'){
        return avoid(s.substring(1));
    }else{
        return ch+avoid(s.substring(1));
    }
}

//Iterative method
public static void skip(String ans,String s,char r){
    if(s==""){
        System.out.println(ans);
    }
    while(s!=""){
        if(s.charAt(0)==r){
            s=s.substring(1);
        }else{
            ans+=s.charAt(0);// to get char at 0
            s=s.substring(1);// new string object without 0th char
        }
    }
    System.out.println(ans);
}
}
