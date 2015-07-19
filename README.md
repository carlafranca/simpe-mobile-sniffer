# simpe-mobile-sniffer

**Summary**: Angular module to detect mobile and tablet devices

##How to use it

1 - Add the scripts to your index.html

```<script src="path_to/mobile-sniffer.srv.js"></script>```

2 - Add is as dependency to your module
```js
['mobileSniffer']
``` 

3 - Check device to use the get retailers by coords

```js 
if(mobsniffer.isMobile.any()){
   //Do whatevery you want if is any mobile/tablet
}
```  
// you can check other options as below or any() as above

- Android() 
- BlackBerry()
- iPhone()
- iPad()
- Opera()
- Windows()
- mobile()
