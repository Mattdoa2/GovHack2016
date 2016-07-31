using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace GooldOldServices
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class GoodOldService : IGoodOldService
    {
        // tester function
        public string GetData(int value)
        {
            return string.Format("You entered: {0}", value);
        }
        // tester function
        public string GetReportInfo(string suburb)
        {
            string result = "";

            SqlConnection conn = new SqlConnection();
            DataSet dSet = new DataSet();
            SqlDataAdapter adapt = new SqlDataAdapter();
            SqlCommand sqlCmd = new SqlCommand("select Name, Description from dbo.CULTURE where Suburb = '" + suburb + "'");

            conn.ConnectionString = ConfigurationManager.ConnectionStrings["goodOldDbConnection"].ToString();

            conn.Open();
            sqlCmd.Connection = conn;
            adapt.SelectCommand = sqlCmd;
            adapt.Fill(dSet);


            bool first = true;
            foreach (DataRow row in dSet.Tables[0].Rows) {
                if (first)
                {
                    result += "Name: " + row["Name"].ToString() + " Description: " + row["Description"];
                    first = false;
                }
                else
                {
                    result += ",Name: " + row["Name"].ToString() + " Description: " + row["Description"];
                }
            }

            return result;
        }

        // Get suburb list for datalist TODO
        public string GetSuburbs() {
            // query database here for suburbs predictive text
            SqlConnection conn = new SqlConnection();
            DataSet dSet = new DataSet();
            SqlDataAdapter adapt = new SqlDataAdapter();
            SqlCommand sqlCmd = new SqlCommand("select Name, Description from dbo.Culture");

            conn.ConnectionString = ConfigurationManager.ConnectionStrings["goodOldDbConnection"].ToString();

            conn.Open();
            sqlCmd.Connection = conn;
            adapt.SelectCommand = sqlCmd;
            adapt.Fill(dSet);

            return "";
        }


        // Return education in surrounding suburbs
        public string GetEducation(string suburb) {
            string result = "";

            SqlConnection conn = new SqlConnection();
            DataSet dSet = new DataSet();
            SqlDataAdapter adapt = new SqlDataAdapter();
            SqlCommand sqlCmd = new SqlCommand("select Name, Suburb from dbo.EDUCATION where Suburb = '" + suburb + "'");

            conn.ConnectionString = ConfigurationManager.ConnectionStrings["goodOldDbConnection"].ToString();

            conn.Open();
            sqlCmd.Connection = conn;
            adapt.SelectCommand = sqlCmd;
            adapt.Fill(dSet);


            bool first = true;
            foreach (DataRow row in dSet.Tables[0].Rows)
            {
                if (first)
                {
                    result += "<b>Name:</b> " + row["Name"].ToString() + " <b>Suburb:</b> " + row["Suburb"];
                    first = false;
                }
                else
                {
                    result += ",,,<b>Name:</b> " + row["Name"].ToString() + " <b>Suburb:</b> " + row["Suburb"];
                }
            }

            return result;
        }
        public string GetCulture(string suburb) {
            string result = "";

            SqlConnection conn = new SqlConnection();
            DataSet dSet = new DataSet();
            SqlDataAdapter adapt = new SqlDataAdapter();
            SqlCommand sqlCmd = new SqlCommand("select Name, Description, Address from dbo.CULTURE where Suburb = '" + suburb + "'");

            conn.ConnectionString = ConfigurationManager.ConnectionStrings["goodOldDbConnection"].ToString();

            conn.Open();
            sqlCmd.Connection = conn;
            adapt.SelectCommand = sqlCmd;
            adapt.Fill(dSet);


            bool first = true;
            foreach (DataRow row in dSet.Tables[0].Rows)
            {
                if (first)
                {
                    result += "<b>Name:</b> " + row["Name"].ToString() + " <b>Description:</b> " + row["Description"] + " <b>Address:</b> " + row["Address"];
                    first = false;
                }
                else
                {
                    result += ",,,<b>Name:</b> " + row["Name"].ToString() + " <b>Description:</b> " + row["Description"] + " <b/>Address:<b> " + row["Address"];
                }
            }

            return result;
        }
        public string GetActivities(string suburb) {
            string result = "";

            SqlConnection conn = new SqlConnection();
            DataSet dSet = new DataSet();
            SqlDataAdapter adapt = new SqlDataAdapter();
            SqlCommand sqlCmd = new SqlCommand("select Name, Phone, Address from dbo.ACTIVITIES where Suburb = '" + suburb + "'");

            conn.ConnectionString = ConfigurationManager.ConnectionStrings["goodOldDbConnection"].ToString();

            conn.Open();
            sqlCmd.Connection = conn;
            adapt.SelectCommand = sqlCmd;
            adapt.Fill(dSet);


            bool first = true;
            foreach (DataRow row in dSet.Tables[0].Rows)
            {
                if (first)
                {
                    result += "<b>Name:</b> " + row["Name"].ToString() + " <b>Address:</b> " + row["Address"] + " <b>Phone:</b> " + row["Phone"];
                    first = false;
                }
                else
                {
                    result += ",,,<b>Name:</b> " + row["Name"].ToString() + " <b>Address:</b> " + row["Address"] + " <b>Phone:/<b> " + row["Phone"];
                }
            }

            return result;
        }
        public string GetCommunityCentres(string suburb) {
            string result = "";

            SqlConnection conn = new SqlConnection();
            DataSet dSet = new DataSet();
            SqlDataAdapter adapt = new SqlDataAdapter();
            SqlCommand sqlCmd = new SqlCommand("select Name, Description, Suburb from dbo.COMMUNITY_CENTRES where Suburb = '" + suburb + "'");

            conn.ConnectionString = ConfigurationManager.ConnectionStrings["goodOldDbConnection"].ToString();

            conn.Open();
            sqlCmd.Connection = conn;
            adapt.SelectCommand = sqlCmd;
            adapt.Fill(dSet);


            bool first = true;
            foreach (DataRow row in dSet.Tables[0].Rows)
            {
                if (first)
                {
                    result += "<b>Name:</b> " + row["Name"].ToString() + " <b>Description:</b> " + row["Description"] + " <b>Suburb:</b> " + row["Suburb"];
                    first = false;
                }
                else
                {
                    result += ",,,<b>Name:</b> " + row["Name"].ToString() + " <b>Description:</b> " + row["Description"] + " <b>Suburb:</b> " + row["Suburb"];
                }
            }

            return result;
        }
        public string GetEvents(string suburb) {
            string result = "";

            SqlConnection conn = new SqlConnection();
            DataSet dSet = new DataSet();
            SqlDataAdapter adapt = new SqlDataAdapter();
            SqlCommand sqlCmd = new SqlCommand("select Name, Description, Address, StartDate, StartTime from dbo.EVENTS where Suburb = '" + suburb + "'");

            conn.ConnectionString = ConfigurationManager.ConnectionStrings["goodOldDbConnection"].ToString();

            conn.Open();
            sqlCmd.Connection = conn;
            adapt.SelectCommand = sqlCmd;
            adapt.Fill(dSet);


            bool first = true;
            foreach (DataRow row in dSet.Tables[0].Rows)
            {
                if (first)
                {
                    result += "<b>Name:</b> " + row["Name"].ToString() + " <b>Description:</b> " + row["Description"] + " <b>Address:</b> " + row["Address"] + " <b>Start Time:</b> " + row["StartDate"] + " at " + row["StartTime"];
                    first = false;
                }
                else
                {
                    result += ",,,<b>Name:</b> " + row["Name"].ToString() + " <b>Description:</b> " + row["Description"] + " <b>Address:</b> " + row["Address"] + " <b>Start Time:</b> " + row["StartDate"] + " at " + row["StartTime"];
                }
            }

            return result;
        }
        public string GetSeniorsDiscounts(string suburb) {
            string result = "";

            SqlConnection conn = new SqlConnection();
            DataSet dSet = new DataSet();
            SqlDataAdapter adapt = new SqlDataAdapter();
            SqlCommand sqlCmd = new SqlCommand("select Name, Address, Phone, Discount from dbo.SENIOR_DISCOUNT_LOCATIONS where UPPER(Suburb) LIKE UPPER('" + suburb + "')");

            conn.ConnectionString = ConfigurationManager.ConnectionStrings["goodOldDbConnection"].ToString();

            conn.Open();
            sqlCmd.Connection = conn;
            adapt.SelectCommand = sqlCmd;
            adapt.Fill(dSet);


            bool first = true;
            foreach (DataRow row in dSet.Tables[0].Rows)
            {
                if (first)
                {
                    result += "<b>Name:</b> " + row["Name"].ToString() + " <b>Discount:</b> " + row["Discount"];
                    first = false;
                }
                else
                {
                    result += ",,,<b>Name:</b> " + row["Name"].ToString() + " <b>Discount:</b> " + row["Discount"];
                }
            }

            return result;
        }
    }
}
