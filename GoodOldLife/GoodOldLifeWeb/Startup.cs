using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GoodOldLifeWeb.Startup))]
namespace GoodOldLifeWeb
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
