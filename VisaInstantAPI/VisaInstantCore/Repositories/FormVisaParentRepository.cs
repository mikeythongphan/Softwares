using OneWitsCore.UnitOfWork;
using VisaInstantCore.Abstract.Repositories;
using VisaInstantCore.DataObjects;

namespace VisaInstantCore.Repositories
{
    public class FormVisaParentRepository : RepositoryBase<FormVisaParent, long>, IFormVisaParentRepository
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public FormVisaParentRepository(IUnitOfWork context) : base(context)
        {
        }
    }
}
