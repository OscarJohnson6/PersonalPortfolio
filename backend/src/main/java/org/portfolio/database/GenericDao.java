package org.portfolio.database;

import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Root;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.criteria.HibernateCriteriaBuilder;
import org.portfolio.entity.Identity;

import java.util.List;

/**
 * The type Generic dao.
 *
 * @param <T> the type parameter
 */
public class GenericDao<T extends Identity> {

    private final Class<T> paramClass;

    /**
     * The Session factory.
     */
    SessionFactory sessionFactory = SessionFactoryProvider.getSessionFactory();

    /**
     * Instantiates a new Generic dao.
     *
     * @param paramClass the param class
     */
    public GenericDao(Class<T> paramClass) {
        this.paramClass = paramClass;
    }

    /**
     * Get daoClass by id
     *
     * @param id the id
     * @return the by id
     */
    public T getById(int id) {
        Session session = sessionFactory.openSession();
        T daoClass = session.get(paramClass, id);
        session.close();
        return daoClass;
    }

    /**
     * update daoClass
     *
     * @param daoClass T to be updated
     */
    public void update(T daoClass) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.merge(daoClass);
        transaction.commit();
        session.close();
    }

    /**
     * insert a new daoClass
     *
     * @param daoClass T to be inserted
     * @return the int
     */
    public int insert(T daoClass) {
        int id = 0;
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.persist(daoClass);
        transaction.commit();
        id = daoClass.getId();
        session.close();
        return id;
    }

    /**
     * Delete a daoClass
     *
     * @param daoClass T to be deleted
     */
    public void delete(T daoClass) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.remove(daoClass);
        transaction.commit();
        session.close();
    }


    /**
     * Return a list of all users
     *
     * @return All users
     */
    public List<T> getAll() {
        Session session = sessionFactory.openSession();
        HibernateCriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<T> query = builder.createQuery(paramClass);
        Root<T> root = query.from(paramClass);
        query.orderBy(builder.asc(root.get("id")));
        List<T> users = session.createSelectionQuery(query).getResultList();

        session.close();

        return users;
    }

    /**
     * Get daoClass by property (exact match)
     * sample usage: getByPropertyEqual("lastname", "Curry")
     *
     * @param propertyName the property name
     * @param value        the value
     * @return the by property equal
     */
    public List<T> getByPropertyEqual(String propertyName, String value) {
        Session session = sessionFactory.openSession();
        HibernateCriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<T> query = builder.createQuery(paramClass);
        Root<T> root = query.from(paramClass);
        query.select(root).where(builder.equal(root.get(propertyName), value));
        List<T> users = session.createSelectionQuery(query).getResultList();

        session.close();
        return users;
    }

    /**
     * Get daoClass by property (like)
     * sample usage: getByPropertyLike("lastname", "C")
     *
     * @param propertyName the property name
     * @param value        the value
     * @return the by property like
     */
    public List<T> getByPropertyLike(String propertyName, String value) {
        Session session = sessionFactory.openSession();
        HibernateCriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<T> query = builder.createQuery(paramClass);
        Root<T> root = query.from(paramClass);
        Expression<String> propertyPath = root.get(propertyName);

        query.where(builder.like(propertyPath, "%" + value + "%"));

        List<T> users = session.createQuery(query).getResultList();
        session.close();
        return users;
    }
}