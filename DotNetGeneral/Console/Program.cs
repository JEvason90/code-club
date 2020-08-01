using System;
using System.IO;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks; 

namespace MyConsole
{
    class Program
    {
        static async Task Main(string[] args)
        {
            string text = File.ReadAllText("./data.json");

            dynamic json = JsonConvert.DeserializeObject(text);

            Console.WriteLine(json["name"]);
            Console.WriteLine(json["postcode"]);
            Console.WriteLine("Hello World!");

            await CallApi();
        }

        // HttpClient is intended to be instantiated once per application, rather than per-use. See Remarks.
static readonly HttpClient client = new HttpClient();

static async Task CallApi()
{
  // Call asynchronous network methods in a try/catch block to handle exceptions.
  try	
  {
    
     string responseBody = await response.Content.ReadAsStringAsync();
     // Above three lines can be replaced with new helper method below
     // string responseBody = await client.GetStringAsync(uri);

     dynamic json = JsonConvert.DeserializeObject(responseBody);

     Console.WriteLine(json);
  }
  catch(HttpRequestException e)
  {
     Console.WriteLine("\nException Caught!");	
     Console.WriteLine("Message :{0} ",e.Message);
  }
}
    }
}

