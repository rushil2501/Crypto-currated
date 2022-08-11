#include <bits/stdc++.h>
using namespace std;
using ll = long long;
using vi = vector<int>;
using vvi = vector<vector<int>>;
using vl = vector<ll>;
using vvl = vector<vector<ll>>;
#define pb push_back
#define forn(i, n) for(ll i = 0; i < n; i++)
#define fora(i, a, n) for(ll i = a; i < n; i++)
#define revfor(i,n)for(i=n;i>=0;i--)
#define pii pair<int,int>
#define ff first
#define ss second
#define pll pair<long long,long long>
#define print_arr(arr,n)   forn(i,n){cout<<arr[i]<<;}cout<<endl;
#define input_arr(arr,n)   forn(i,n){cin>>arr[i];}
#define print_vec(v)       for(auto i:v){cout<<i<<;}cout<<endl;
// ------ Global Constants -----------------------------------------------------------------------------------
const int MOD = 1e9 + 7;
const int MAX_ARR = 2*1e5 + 1;
const int MAXX = INT_MAX;
const int MINN = INT_MIN;
int32_t main() {
    ios_base::sync_with_stdio(0); 
    cin.tie(0);
    cout.tie(0);
    int tc;cin>>tc;
    while(tc--){
        int n;cin>>n;
        vi v;
        forn(i,n){
            int k;cin>>k;v.pb(k);
        }
        int f=0;
        forn(i,n){
            if(v[i]%10==0){
                for(int j=0;j<n; j++){
                    if(v[j]==v[i] || v[j]==v[i]/2)continue;
                    else {f=1;break;}
                }
                if(f==1)break;
            }
        }
        if(f==1){cout<<"NO"<<endl;continue;}
        forn(i,n){
            if(v[i]%10==1)v[i]+=1;
            else if(v[i] %10==3)v[i]+=9;
            else if(v[i]%10==4)v[i]+=18;
            else if(v[i]%10==6)v[i]+=6;
            else if(v[i]%10==7)v[i]+=25;
            else if(v[i]%10==8)v[i]+=14;
            else if(v[i]%10==9)v[i]+=23;
        }
        sort(v.begin(),v.end());
        f=0;
        for(int i=1; i<v.end();i++){
            if(v[i]-v[i-1] % 20 !=0){f=1;break;}
        }
        if(f==1)cout<<"NO"<<endl;
        else cout<<"YES"<<endl;
    }
    return 0 ;  
}