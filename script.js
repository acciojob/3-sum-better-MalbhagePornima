function threeSum(arr, target) {
// write your code here
	let initalDiff=Infinity,ans=-1;
	let n=arr.length;

	for(let i=0;i<=n-3;i++)
		{
				for(let j=i+1;i<=n-2;j++)
					{
							for(let k=j+1;k<=n-1;k++)
								{
									let sum=arr[i]+arr[j]+arr[k];
									let diff=Math.abs(sum-target);
									if(initalDiff>diff){
										ans=sum;
									}
								}
					}
		}
  console.log(ans);
}

module.exports = threeSum;
