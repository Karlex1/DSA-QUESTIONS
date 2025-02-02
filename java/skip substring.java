
//Q- skip substring
class SkipSubString{
    public static void main(String[] args){
String s="ertyappeuiop";
String target="appe";
System.out.println(skip(s));
System.out.println(skipt(s,target));
    }
    public static String skip(String s){
        if(s.isEmpty()){
            return "";
        }
        if(s.startsWith("apple")){
            return skip(s.substring(5));
        }
        else{
            return s.charAt(0)+skip(s.substring(1));
        }
    }
      public static String skipt(String s,String t){
        if(s.isEmpty()){
            return "";
        }
        if(s.startsWith(t)){
            return skipt(s.substring(5),t);
        }
        else{
            return s.charAt(0)+skipt(s.substring(1),t);
        }
    }
}
