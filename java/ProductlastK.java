//First intution was to add every no in list 
//and when need to get Product of last k then 
//do it iteratively but it is time taking
//so
//put the proct of num with previous into next
//like input[1,2,3,4,5,6,7,8,9]
//productList=[1,2,6,24,24*5,24*5*6,...]
//Edge case will be if zero then put 1;

//Brute approach
class ProductOfNumbers {
    List<Integer> list;
    public ProductOfNumbers() {
        list=new ArrayList<>();
        
    }
    
    public void add(int num) {
        list.add(num);
    }
    
    public int getProduct(int k) {
        int n=list.size()-1;int prod=1;
        for(int i=n;i>n-k;i--){
            prod*=list.get(i);
        }
        return prod;
    }
}

//Prefix product approach
class ProductOfNumbers {
    List<Integer> listProduct;

    public ProductOfNumbers() {
        listProduct=new ArrayList();
        listProduct.add(1);
    }
    
    public void add(int num) {
        if(num==0){
            listProduct=new ArrayList();
            listProduct.add(1);
        }else{
            listProduct.add(listProduct.get(listProduct.size()-1)*num);    
        }    
    }
    
    public int getProduct(int k) {
        if(k>listProduct.size()-1){
            return 0;
        }
        else{
            return listProduct.get(listProduct.size()-1)/listProduct.get(listProduct.size()-1-k);//(n/n-k)
        }
        
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * ProductOfNumbers obj = new ProductOfNumbers();
 * obj.add(num);
 * int param_2 = obj.getProduct(k);
 */
