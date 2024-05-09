package org.portfolio.rest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.portfolio.database.GenericDao;
import org.portfolio.entity.FanAccounts;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.MultivaluedMap;
import java.io.IOException;
import java.util.Date;
import java.util.List;

/**
 * The type Fan accounts response.
 */
@Path("/fanAccounts")
public class FanAccountsResponse implements ContainerResponseFilter {
    private final Logger logger = LogManager.getLogger(this.getClass());
    private final GenericDao<FanAccounts> dao = new GenericDao<>(FanAccounts.class);
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext) throws IOException {
        responseContext.getHeaders().add("Access-Control-Allow-Origin", "*");
        responseContext.getHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        responseContext.getHeaders().add("Access-Control-Allow-Credentials", "true");
        responseContext.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
    }

    /**
     * Gets all fan accounts.
     *
     * @return the all fan accounts
     */
    @GET
    @Produces("application/json")
    public Response getAllFanAccounts() {
        List<FanAccounts> fans = dao.getAll();
        return createResponse(fans);
    }

    /**
     * Gets fan accounts by email.
     *
     * @param email the email
     * @return the fan accounts by email
     */
    @GET
    @Path("/{email}")
    @Produces("application/json")
    public Response getFanAccountsByEmail(@PathParam("email") String email) {
        List<FanAccounts> fans = dao.getByPropertyLike("userEmail", email);
        if (!fans.isEmpty()) {
            return createResponse(fans);
        }
        return Response.status(404).entity("No fan accounts found for email: " + email).build();
    }

    private Response createResponse(List<FanAccounts> fans) {
        try {
            String outputString = objectMapper.writeValueAsString(fans);
            return Response.status(200).entity(outputString).build();
        } catch (JsonProcessingException e) {
            logger.error("Error converting fan accounts to JSON", e);
            return Response.status(500).entity("Error converting fan accounts to JSON").build();
        }
    }

    /**
     * Edit fan account response.
     *
     * @param jsonFanAccount the json fan account
     * @return the response
     */
    @PATCH
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response editFanAccount(String jsonFanAccount) {
        try {
            FanAccounts fanAccount = objectMapper.readValue(jsonFanAccount, FanAccounts.class);
            dao.update(fanAccount);
            String outputString = "Successfully Updated:\n" + fanAccount.toString();
            return Response.status(201).entity(outputString).build();
        } catch (JsonProcessingException e) {
            logger.error("Error deserializing JSON into FanAccounts object", e);
            return Response.status(400).entity("Error processing the request").build();
        }
    }

    /**
     * Add fan account response.
     *
     * @param email the email
     * @return the response
     */
    @POST
    @Path("/{email}")
    @Produces("application/json")
    public Response addFanAccount(@PathParam("email") String email) {
        FanAccounts fan = new FanAccounts(email, new Date());
        int id = dao.insert(fan);
        FanAccounts insertedFanAccount = dao.getById(id);

        try {
            String outputString = objectMapper.writeValueAsString(insertedFanAccount);
            return Response.status(201).entity(outputString).build();
        } catch (JsonProcessingException e) {
            logger.error("Error converting fan account to JSON", e);
            return Response.status(500).entity("Error converting fan account to JSON").build();
        }
    }

    /**
     * Delete fan account response.
     *
     * @param id the id
     * @return the response
     */
    @GET
    @Path("/delete/{id}")
    @Produces("text/plain")
    public Response deleteFanAccount(@PathParam("id") int id) {
        FanAccounts fanAccountToDelete = dao.getById(id);
        if (fanAccountToDelete != null) {
            dao.delete(fanAccountToDelete);
            return Response.status(200).entity("Fan account with ID " + id + " has been deleted").build();
        } else {
            return Response.status(404).entity("No fan account found with ID: " + id).build();
        }
    }

    @GET
    @Path("/update/{id}/{email}")
    @Produces("plain/text")
    public Response editFanAccountWithGet(
            @PathParam("id") int id,
            @PathParam("email") String email
    ) {
        if (!email.isEmpty() && id != 0) {
            FanAccounts fanAccount = dao.getById(id);
            fanAccount.setUserEmail(email);
            dao.update(fanAccount);
            return Response.status(201).entity(fanAccount).build();
        } else {
            return Response.status(400).entity("Error processing the request").build();
        }
    }
}
