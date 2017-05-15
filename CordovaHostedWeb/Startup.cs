using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CordovaHostedWeb.Startup))]
namespace CordovaHostedWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
