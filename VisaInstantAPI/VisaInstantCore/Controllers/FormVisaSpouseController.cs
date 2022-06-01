using Microsoft.AspNetCore.Mvc;
using OneWitsCore.Auth;
using OneWitsCore.Controllers;
using OneWitsCore.DTOs;
using VisaInstantCore.Abstract.Repositories;
using VisaInstantCore.DataObjects;

namespace VisaInstantCore.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class FormVisaSpouseController : ControllerTableBase<FormVisaSpouse, long>
    {

        /// <summary>
        /// 
        /// </summary>
        public FormVisaSpouseController(IFormVisaSpouseRepository repos)
            : base(repos)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Insert")]
        public override IActionResult Insert([FromBody] FormVisaSpouse obj)
        {
            obj.AccountId = AccountId;
            Repos.Insert(obj);
            Repos.UOW.Commit();
            return Ok(ResponseDto.Succeed(obj));
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetByAccount")]
        public IActionResult GetByAccount()
        {
            var result = Repos.GetFiltered(x => x.AccountId == AccountId && !x.Deleted).ToList();
            return Ok(ResponseDto.Succeed(result));
        }
    }
}
