import {create} from "apisauce";

const api = create({
    baseURL: 'http://192.168.0.107:1337/api',
    headers: { 
                 "X-API-Key":"6d28727130e4505138c108ef23dfba31d412b1d7e80df25087d7d906aa925defcc08dbb527e2ce88e3f6bae0db3fb5de2a78dd56e0fbdf774dec3340bd25551ea2d1ef22e39379089b9786d52fedcf16bbec363087487d67940232d08a15448274a1e318a1cf9619dba81817b96e943fac8147aa4ce4082123c2c55f92ef12a1"
              },
  })

  const getSlider=()=>api.get('/sliders?populate=*');
  const getVideoCourse=()=>api.get('video-courses?populate=*');
  const getCourseList=(type)=>api.get('course-lists?filters[type][$eq]='+type+'&populate[Topic][populate][0]=Content&populate[image][populate][0]=image');
  const getGif=()=>api.get('gifs?populate=*');

  export default{
    getSlider,
    getVideoCourse,
    getCourseList,
    getGif,

  }