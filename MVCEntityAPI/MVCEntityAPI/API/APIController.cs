using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MVCEntityAPI.API
{
    public class APIController : ApiController
    {
        Employee1Entities dbobj = new Employee1Entities();
        // GET: api/API
        //for listing all the data (lists) at once
        [HttpGet]
        [Route("api/API/getwebapitabs")]
        public IHttpActionResult Get()
        {
            return Ok(dbobj.WebApiTabs.ToList());
        }

        // GET: api/API/5
        //for listing details
        [HttpGet]
        [Route("api/API/getwebapitab/{id}")]
        public IHttpActionResult Get(int id)
        {
            WebApiTab employee = dbobj.WebApiTabs.Find(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        // POST: api/API
        //for inserting entered value
        [HttpPost] //this is used to post the method because of insertion it changes according to the method we using get,delete etc
        [Route("api/API/postwebapitab")] //in api we call method using this last portion of the route we can give any name to it we can call api by this name
        public IHttpActionResult Post(WebApiTab obj)
        {
            if (ModelState.IsValid)
            {
                dbobj.WebApiTabs.Add(obj);
                dbobj.SaveChanges();
            }
            else
            {
                return BadRequest(ModelState);
            }
            return Ok(200); //success code is 220
        }

        // PUT: api/API/5
        [HttpPut]
        [Route("api/API/putwebapitab/{id}")]
        public IHttpActionResult Put(int id,WebApiTab ob)
        {
            dbobj.Entry(ob).State = EntityState.Modified;
            try
            {
                dbobj.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/API/5
        [HttpDelete]
        [Route("api/API/deletewebapitab/{id}")]
        public IHttpActionResult Delete(int id)
        {
            WebApiTab webApiTab = dbobj.WebApiTabs.Find(id);
            if(webApiTab == null)
            {
                return NotFound();
            }
            dbobj.WebApiTabs.Remove(webApiTab);
            dbobj.SaveChanges();
            return Ok(webApiTab);
        }
    }
}
