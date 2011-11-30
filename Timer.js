/**
 * @author chuangui.xiecg
 */
var Timer = {
	
	_data:{},
	
	start:function(key){
		this._data[key] = +(new Date());
	},
	
	stop:function(key){
		var time = this._data[key];
		
		if(time){
			this._data[key] = +(new Date()) - time;
		}
	},
	
	getTime:function(key){
		return this._data[key];
	}
	
};
