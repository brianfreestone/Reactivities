namespace API.App_Code
{
    public static class Global
    {


        static int _numUsersTyping;

    public static int NumUsers 
    {
        get { return _numUsersTyping; }
        set { _numUsersTyping = value; }
    } 
    }
}
