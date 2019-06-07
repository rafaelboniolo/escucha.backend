import path from 'path'


export default class PathBuilder{

    public static buildUploadDir(_path:String){
        return _path.split("\\ts")[0] +path.sep+'ts'+path.sep+'tmp'+path.sep+'files'
    }

    public static buildPythonCommand(_path:String, _pathfile:String, file:String){
        return 'python '+ _path.split("\\ts")[0] + path.sep+'py'+path.sep+'recognize.py '+_pathfile+' ' +file;
    }
    public static buildPythonCommandUTF(_path:String, _pathfile:String, file:String){
        return 'pipenv run python '+ _path.split("\\ts")[0] + path.sep+'py'+path.sep+'recognize.py '+_pathfile+' ' +file;
    }
    
    public static builderDeleteCommand(_path:String){
        return "del "+_path.split("\\\\").join('\\');
    }
}