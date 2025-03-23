class Solution:
    def isValid(self, s: str) -> bool:
        st=[]
        flag=True
        for i in range(len(s)):
            if st and st[-1]+s[i] in["{}","[]","()"]:
                st.pop()
            else:
                st.append(s[i])
        flag=len(st)==0
        return flag
