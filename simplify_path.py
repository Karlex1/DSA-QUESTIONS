#note the question doesnot want you to write a code completely for combinne a letters and make word dir name 
#look at string it can be split at / and u get whole word ok 
#also isalpha() is used to check given char is a-zA-z or not

class Solution:
    def simplifyPath(self, path: str) -> str:
        comps=path.split("/")
        st=[]
        for comp in comps:
            if comp=="" or comp==".":
                continue
            if comp=="..":
                if st:
                    st.pop()
            else:
                st.append(comp)
        return "/"+"/".join(st)
