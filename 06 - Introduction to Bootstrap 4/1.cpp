#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        int count=0;
        int sum=0;
        unordered_map<int,int> mp;
        mp[0]++;
        for(int i=0;i<nums.size();i++){
            sum+=nums[i];
            if(mp.find(sum%k) != mp.end()){
                count++;
            }
            mp[sum%k]++;
        }
        return count;
    }
};

int main(){
    Solution s;
    vector<int> nums={4,5,0,-2,-3,1};
    int k = 5;
    cout<<s.subarraysDivByK(nums, k);
    return 0;
}