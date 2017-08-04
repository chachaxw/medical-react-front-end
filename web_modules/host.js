const host = (urlrequest) => {
	const url = window.location.href;
	let key ;
	let host;
	if(urlrequest.match("/user")) {
		key = 'members';
	}else if(urlrequest.match("/manage")) {
        key = 'manage';
	}else if(urlrequest.match("/capacity")) {
		key = 'capacity';
	}else if(urlrequest.match("/api") || urlrequest.match("/pay")) {
		key = 'coldchain'
	}

	if(url.match('web.glp168.com')){
        host = {
            members:'https://member-api.glp168.com',
            coldchain:'https://chain-api.glp168.com',
            capacity:'https://capacity-api.glp168.com',
            manage:'https://manage.glp168.com'
        }
	}else if(url.match('dev-financial.glp.zmq.cc')) {
        host = {
			members:'http://dev-members.glp.zmq.cc',
            coldchain:'http://dev-chain.glp.zmq.cc',
            capacity:'http://dev-capacity.glp.zmq.cc',
			manage:'http://172.16.6.25:8888/manage'
		}
	} else if(url.match('test-financial.glp.zmq.cc')) {
        host = {
            members:'http://test-members.glp.zmq.cc',
            coldchain:'http://test-chain.glp.zmq.cc',
            capacity:'http://test-capacity.glp.zmq.cc',
            manage:'http://172.16.6.25:8888/manage'
		}
	} else if(url.match('localhost')) {

        host = {
            members:'http://10.19.140.187:8080',
            coldchain:'http://10.19.140.187:8085',
            capacity:'http://10.19.140.187:8085',
            manage:'http://10.19.140.187:8089'
        }

        // host = {
        //     members:'',
        //     coldchain:'',
        //     capacity:'',
        //     manage:''
        // }
	}

	return host[key]+urlrequest;
}

export default host;