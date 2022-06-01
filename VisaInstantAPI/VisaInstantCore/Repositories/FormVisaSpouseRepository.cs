using OneWitsCore.UnitOfWork;
using VisaInstantCore.Abstract.Repositories;
using VisaInstantCore.DataObjects;

namespace VisaInstantCore.Repositories
{
    public class FormVisaSpouseRepository : RepositoryBase<FormVisaSpouse, long>, IFormVisaSpouseRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public FormVisaSpouseRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
